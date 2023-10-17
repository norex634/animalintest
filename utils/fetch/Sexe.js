import axios from 'axios';

export const GetFetchSexes = async () => {
    try {
      const response = await axios.get(`${process.env.BASE_URL}/api/sexes`);
      return response.data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  };