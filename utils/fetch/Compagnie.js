import axios from 'axios';

export const GetFetchCompagnies = async () => {
    try {
      const response = await axios.get(`${process.env.BASE_URL}/api/companies`);
      return response.data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  };

export const GetFetchCompagnie1 = async () => {
  try {
    const response = await axios.get(`${process.env.BASE_URL}/api/companie`);
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};