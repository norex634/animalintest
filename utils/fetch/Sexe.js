export const GetFetchSexes = async () => {
  try {
    const response = await fetch(`${process.env.BASE_URL}/api/sexes`,{
      cache: 'no-cache',
    });
    
    if (!response.ok) {
      throw new Error(`La requête a échoué avec un statut ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};