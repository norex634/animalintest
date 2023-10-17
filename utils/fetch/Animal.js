import axios from 'axios';

export const GetFetchAnimaux = async () => {
    try {
      const response = await axios.get(`${process.env.BASE_URL}/api/animaux`);
      return response.data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  };