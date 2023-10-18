export const GetFetchFaqs = async () => {
  try {
    const response = await fetch(`${process.env.BASE_URL}/api/faqs`,{
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

export const PostFaq = async (data) => {
  try {
    const response = await fetch(`/api/faqs`, {
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
      //   console.log('Erreur lors de la création de la faq :', errorData.message);
      //   throw new Error('Erreur lors de la création de la faq : ' + errorData.message);
    }
  } catch (error) {
    console.log('Erreur lors de la création de la faq :', error.message);
    throw error;
  }
};

