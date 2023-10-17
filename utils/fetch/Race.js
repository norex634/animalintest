import axios from 'axios';

export const GetFetchRaces = async () => {
    try {
      const response = await axios.get(`${process.env.BASE_URL}/api/races`);
      return response.data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  };