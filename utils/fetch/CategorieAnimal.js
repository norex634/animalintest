import axios from 'axios';

export const GetFetchCategorieAnimaux = async () => {
    try {
      const response = await axios.get(`${process.env.BASE_URL}/api/categories-animaux`);
      return response.data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  };