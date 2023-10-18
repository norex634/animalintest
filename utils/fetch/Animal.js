export const GetFetchAnimaux = async () => {
  try {
    const response = await fetch(`${process.env.BASE_URL}/api/animaux`,{
      cache: 'no-cache',
    });

    if (!response.ok) {
      throw new Error(`La requête a échoué avec un statut ${response.status}`);
    }
    return await response.json();
    // if(response.status === 200){

    //   return await response.json();
      
    // }else{
    //   throw new Error(`La requête a échoué avec un statut ${response.status}`);
    // }
  } catch (error) {
    console.log(error);
    throw error;
  }
};


export const PostAnimal = async (data) => {
  
  try {
    const response = await fetch(`/api/animaux`, {
      method: 'POST',
      body: data,
    });

    if (response.status === 200) {
      // La création a réussi, vous pouvez gérer la réponse ici
      const responseData = await response.json();
      return responseData;
    // } else {
    //   // Une erreur s'est produite lors de la création
    //   const errorData = await response.json();
    //   console.log('Erreur lors de la création de l\'animal :', errorData.message);
    //   throw new Error('Erreur lors de la création de l\'animal : ' + errorData.message);
    }
  } catch (error) {
    console.log('Erreur lors de la création de l\'animal :', error.message);
    throw error;
  }
};

