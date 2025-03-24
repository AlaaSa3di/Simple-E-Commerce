import axios from 'axios';

const API_URL = 'https://6784cca11ec630ca33a5b6f4.mockapi.io/products';

export const fetchAllProducts = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const fetchProductById = async (id) => {
  const response = await axios.get(`${API_URL}/${id}`);
  return response.data;
};