import axios from "axios";

 const api = axios.create({
    baseURL: "https://faq.kvadrat.az/",
    headers: {
      "Content-Type": "application/json",
      "Token": "sxim3ddkohcwkxlCmxIOwb22JeWoQBIwTsQpVk6fTiQnB0ecoG", // Statik token burada təyin olunur
    },
  });
export default api;