import axios from 'axios';

export async function fetchUserData(username) {
  const response = await axios.get(`https://api.github.com/users/${username}`);
  return response.data;
}

export async function fetchAdvancedUsers({ username, location, repos }) {
  let query = username ? `${username}` : '';
  if (location) query += `+location:${location}`;
  if (repos) query += `+repos:>=${repos}`;

  const response = await axios.get(`https://api.github.com/search/users?q=${query}`);
  const users = await Promise.all(
    response.data.items.map(async (user) => {
      const details = await fetchUserData(user.login);
      return details;
    })
  );
  return users;
}