import axios from 'axios';

// Fetch basic data for a single user
export async function fetchUserData(username) {
  const response = await axios.get(`https://api.github.com/users/${username}`);
  return response.data;
}

// Search users using advanced criteria: username, location, minRepos
export async function searchUsers({ username = '', location = '', minRepos = '' }) {
  let query = username;

  if (location) query += `+location:${location}`;
  if (minRepos) query += `+repos:>=${minRepos}`;

  const response = await axios.get(`https://api.github.com/search/users?q=${query}`);
  return response.data;
}

// Optional: Fetch full user details for advanced search (if needed)
export async function fetchAdvancedUsers({ username = '', location = '', minRepos = '' }) {
  const baseQuery = { username, location, minRepos };
  const data = await searchUsers(baseQuery);

  const users = await Promise.all(
    data.items.map(async (user) => {
      try {
        const details = await fetchUserData(user.login);
        return details;
      } catch {
        return null;
      }
    })
  );

  return users.filter(Boolean); // remove nulls
}
