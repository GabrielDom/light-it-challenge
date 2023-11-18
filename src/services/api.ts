const API_BASE_URL = "https://63bedcf7f5cfc0949b634fc8.mockapi.io";

export const getPatients = async () => {
  const response = await fetch(`${API_BASE_URL}/users`);
  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }
  return response.json();
};
