import axios from 'axios';

const api = axios.create({
    baseURL: "https://faq.kvadrat.az/api/",
    headers: {
        "Content-Type": "application/json",
        "Token": "sxim3ddkohcwkxlCmxIOwb22JeWoQBIwTsQpVk6fTiQnB0ecoG", // Statik token burada təyin olunur
    },
});
api.interceptors.request.use(
    (config) => {
      const token = localStorage.getItem("token"); // Replace with your token storage method
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );
 export default api; 
