export const GetFetchUsers = async () => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/users`,{
      cache: 'no-cache',
    });
    if (!response.ok) {
      throw new Error(`La requête a échoué avec un statut ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error(error);
  }
};

export const PostUser = async (data) => {
  try {
    const response = await fetch(`/api/users`,{
      method: 'POST',
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
    //   console.log('Erreur lors de la création de la race :', errorData.message);
    //   throw new Error('Erreur lors de la création de la race : ' + errorData.message);
     }
  } catch (error) {
    console.log('Erreur lors de la création de la race :', error.message);
    throw error;
  }
};

export const PatchUser = async (data) => {
  try {
    const response = await fetch(`/api/users`, {
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
    console.log('Erreur lors de la modification de l\'user :', error.message);
    throw error;
  }
};