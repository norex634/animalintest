import axios from 'axios';

export const GetFetchActus = async () => {
    try {
      const response = await axios.get(`${process.env.BASE_URL}/api/actus`);
      return response.data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  };