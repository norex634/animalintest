import axios from 'axios';

export const GetFetchCategorieActus = async () => {
    try {
      const response = await axios.get(`${process.env.BASE_URL}/api/categories-actus`);
      return response.data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  };