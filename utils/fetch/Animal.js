export const GetFetchAnimaux = async ({sexe,race,type,page,limit,name}) => {
  
  
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/animaux?sexe=${sexe}&race=${race}&type=${type}&page=${page}&limit=${limit}&name=${name}`,{
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

export const PatchAnimal = async (data) => {
  
  try {
    const response = await fetch(`/api/animaux`, {
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
    //   console.log('Erreur lors de la création de l\'animal :', errorData.message);
    //   throw new Error('Erreur lors de la création de l\'animal : ' + errorData.message);
    }
  } catch (error) {
    console.log('Erreur lors de la modification de l\'animal :', error.message);
    throw error;
  }
};

export const DeleteAnimal = async (data) => {
  
  try {
    const response = await fetch(`/api/animaux?${data}`, {
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
    //   console.log('Erreur lors de la création de l\'animal :', errorData.message);
    //   throw new Error('Erreur lors de la création de l\'animal : ' + errorData.message);
    }
  } catch (error) {
    console.log('Erreur lors de la supretion de l\'animal :', error.message);
    throw error;
  }
};
