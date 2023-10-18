export const GetFetchUsers = async () => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/users`,{
      cache: 'no-cache',
    });
    
    return await response.json();
  } catch (error) {
    console.error(error);
  }
};