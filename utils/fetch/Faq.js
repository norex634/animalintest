import axios from 'axios';

export const GetFetchFaqs = async () => {
    try {
      const response = await axios.get(`${process.env.BASE_URL}/api/faqs`);
      return response.data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  };