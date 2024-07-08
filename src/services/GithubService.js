const GITHUB_USERNAME = 'AshwinSaji10';
// const REPO_COUNT = 5;

export const fetchLatestRepositories = async (repo_count) => {
  const response = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=created&per_page=${repo_count}`);
  if (!response.ok) {
    throw new Error('Failed to fetch repositories');
  }
  return response.json();
};
