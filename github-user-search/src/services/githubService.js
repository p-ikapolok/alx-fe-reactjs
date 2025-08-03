import axios from 'axios';

// Basic fetch for a single user (used in earlier versions)
export async function fetchUserData(username) {
  const response = await axios.get(`https://api.github.com/users/${username}`);
  return response.data;
}

// Advanced search using GitHub Search API
export async function searchUsers(query) {
  const response = await axios.get(`https://api.github.com/search/users?q=${query}`);
  return response.data;
}

// Optional: Fetch advanced details for each user (e.g. bio, location, repos)
export async function fetchAdvancedUsers({ username, location, repos }) {
  let query = username ? `${username}` : '';
  if (location) query += `+location:${location}`;
  if (repos) query += `+repos:>=${repos}`;

  const response = await axios.get(`https://api.github.com/search/users?q=${query}`);

  // Fetch detailed user info for each result
  const users = await Promise.all(
    response.data.items.map(async (user) => {
      try {
        const details = await fetchUserData(user.login);
        return details;
      } catch (err) {
        return null; // fallback in case of error
      }
    })
  );

  // Filter out null responses (failed fetches)
  return users.filter(Boolean);
}
