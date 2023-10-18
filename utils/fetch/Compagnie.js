
export const GetFetchCompagnie1 = async () => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/compagnie`,{
      cache: 'no-cache',
    });
    
    if (!response.ok) {
      throw new Error(`La requête a échoué avec un statut ${response.status}`);
    }

    return await response.json();

  } catch (error) {
    console.log(error);
  }
};
