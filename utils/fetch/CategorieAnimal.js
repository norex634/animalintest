export const GetFetchCategorieAnimaux = async () => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/categories-animaux`,{
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


export const PostCategorieAnimal = async (data) => {
  try {
    const response = await fetch(`/api/categories-animaux`, {
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
    //   console.log('Erreur lors de la création de la catégorie :', errorData.message);
    //   throw new Error('Erreur lors de la création de la catégorie : ' + errorData.message);
    }
  } catch (error) {
    console.log('Erreur lors de la création de la catégorie :', error.message);
    throw error;
  }
};

export const PatchCategorieAnimal = async (data) => {
  try {
    const response = await fetch(`/api/categories-animaux`, {
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
    //   console.log('Erreur lors de la création de la catégorie :', errorData.message);
    //   throw new Error('Erreur lors de la création de la catégorie : ' + errorData.message);
    }
  } catch (error) {
    console.log('Erreur lors de la modification du type :', error.message);
    throw error;
  }
};

export const DeleteCategorieAnimal = async (data) => {
  try {
    const response = await fetch(`/api/categories-animaux?${data}`, {
      method: 'DELETE',
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
    //   console.log('Erreur lors de la création de la catégorie :', errorData.message);
    //   throw new Error('Erreur lors de la création de la catégorie : ' + errorData.message);
    }
  } catch (error) {
    console.log('Erreur lors de la modification du type :', error.message);
    throw error;
  }
};
