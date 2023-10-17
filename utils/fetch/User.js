export const GetFetchUsers = async () => {
  try {
    const response = await fetch(`${process.env.BASE_URL}/api/users`);
    
    if (!response.ok) {
      throw new Error(`Fetch request failed with status ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};