import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:4000/',
  headers: {
    'Content-Type': 'application/json',
  },
});

export const geItemsService = async () => {
  const items = await api.get('/items');
  return items.data;
};
