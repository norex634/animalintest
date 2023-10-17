export const GetFetchCompagnies = async () => {
  try {
    const response = await fetch(`${process.env.BASE_URL}/api/companies`);
    
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

export const GetFetchCompagnie1 = async () => {
  try {
    const response = await fetch(`${process.env.BASE_URL}/api/companie`);
    
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
