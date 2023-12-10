const BASE_URL = "https://example-data.draftbit.com/books?_limit=10";

export async function fetchData() {
  try {
    const response = await fetch(BASE_URL);
    if (!response.ok) {
      throw new Error("Network response error");
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
}

export const BOOKDETAIL_URL = "https://example-data.draftbit.com/books/";
