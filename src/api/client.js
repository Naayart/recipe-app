import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://dummyjson.com/recipes",
});

export const apiFetcher = async (endpoint) => {
  try {
    const response = await apiClient.get(endpoint);
    return response.data;
  } catch (error) {
    console.error("Error fetching data from API:", error);
    throw error;
  }
};
