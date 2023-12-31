
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

export const PatchCompagnie1 = async (data) => {
  try {
    const response = await fetch(`/api/compagnie`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (response.status === 200) {
      // La création a réussi, vous pouvez gérer la réponse ici
      const responseData = await response.json();
      return responseData;
    // } else {
    //   // Une erreur s'est produite lors de la création
    //   const errorData = await response.json();
    //   console.log('Erreur lors de la création :', errorData.message);
    //   throw new Error('Erreur lors de la création : ' + errorData.message);
    }
  } catch (error) {
    console.log('Erreur lors de la Modif:', error.message);
    throw error;
  }
};
