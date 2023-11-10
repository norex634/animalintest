export const PostContact = async (data) => {
    try {
      const response = await fetch(`/api/contactemail`, {
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
      //   console.log('Erreur lors de la création :', errorData.message);
      //   throw new Error('Erreur lors de la création : ' + errorData.message);
      }
    } catch (error) {
      console.log('Erreur lors de la création :', error.message);
      throw error;
    }
  };