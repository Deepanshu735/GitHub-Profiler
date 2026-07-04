import BASE_URL from "./client";

export const getUser = async (username) => {
  const response = await fetch(`${BASE_URL}/users/${username}`);

  if (!response.ok) {
    throw new Error("User not found");
  }

  return await response.json();
};

export const getRepos = async (username) => {
  const response = await fetch(`${BASE_URL}/users/${username}/repos`);

  if (!response.ok) {
    throw new Error("Repositories not found");
  }

  return await response.json();
};

export const getFollowers = async (username) => {
  const response = await fetch(`${BASE_URL}/users/${username}/followers`);

  if (!response.ok) {
    throw new Error("Followers not found");
  }

  return await response.json();
};