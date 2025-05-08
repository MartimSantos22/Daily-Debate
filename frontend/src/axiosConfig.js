import axios from 'axios';

// Configuração global do Axios
const axiosInstance = axios.create({
  baseURL: 'http://127.0.0.1:8000',  // URL base da sua API
  headers: {
    'Content-Type': 'application/json',  // Cabeçalho padrão
  },
});

export default axiosInstance;  // Exporta a instância configurada
