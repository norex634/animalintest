export const GetFetchActus = async () => {
  try {
    const response = await fetch(`${process.env.BASE_URL}/api/actus`,{
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

export const PostActu = async (data) => {
  try {
    const response = await fetch(`/api/actus`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (response.status === 201) {
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
    console.log('Erreur lors de la création :', error.message);
    throw error;
  }
};

