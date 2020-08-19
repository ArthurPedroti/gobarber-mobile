import axios from 'axios';

const api = axios.create({
  baseURL: 'https://gobarber.acervogeek.com.br',
});

export default api;
