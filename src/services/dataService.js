const BASE_URL = import.meta.env.VITE_API_BASE_URL;
const API_TOKEN = import.meta.env.VITE_API_TOKEN;
async function apiRequest(endpoint) {
  const response = await fetch(` ${BASE_URL}${endpoint}`, {
    headers: {
      Authorization: `Bearer ${API_TOKEN}`,
      Accept: "application/json",
    },
  });
  if (!response.ok) {
    throw new Error(`Request failed with status ${response.status}`);
  }
  return response.json();
}
export async function getCategories() {
  const result = await apiRequest("/categories");
  return [...result.data].sort((a, b) => a.sort_order - b.sort_order);
}
export async function getProducts() {
  const result = await apiRequest("/products");
  return result.data;
}
