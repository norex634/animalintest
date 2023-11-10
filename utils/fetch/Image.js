export const GetFetchImages = async (animalId) => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/images?id=${animalId}`,{
        cache: 'no-cache',
      });
      if (!response.ok) {
        throw new Error(`La requête a échoué avec un statut ${response.status}`);
      }
      return await response.json();
    } catch (error) {
      console.log(error);
      throw error;
    }
  };

  export const PostImages = async (data) => {
    // data = JSON.stringify(data);
    try {
      const response = await fetch(`/api/images`,{
        method: 'POST',
        body: data,
      });

      if (response.status === 200) {
      // La sup a réussi, vous pouvez gérer la réponse ici
      const responseData = await response.json();
      return responseData;
    // } else {
      //   // Une erreur s'est produite lors de la sup
      //   const errorData = await response.json();
      //   console.log('Erreur lors de la sup de la faq :', errorData.message);
      //   throw new Error('Erreur lors de la sup de la faq : ' + errorData.message);
    }
  } catch (error) {
    console.log('Erreur lors de la sup d\'image :', error.message);
    throw error;
  }
  };

  export const DeleteImage = async (imgToSup) => {
    
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/images`,{
        method: 'DELETE',
        body: JSON.stringify({imgToSup}),
      });
      if (!response.ok) {
        throw new Error(`La requête a échoué avec un statut ${response.status}`);
      }
      return await response.json();
    } catch (error) {
      console.log(error);
      throw error;
    }
  };