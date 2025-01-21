import axios from 'axios';

const api = axios.create({
    baseURL: "https://faq.kvadrat.az/api/",
    headers: {
        "Content-Type": "application/json",
        "Token": "sxim3ddkohcwkxlCmxIOwb22JeWoQBIwTsQpVk6fTiQnB0ecoG", // Statik token burada təyin olunur
    },
});

// Function to handle login request
export const loginUser = async (userData) => {
    try {
        const response = await api.post('/control/login', userData); // Login API endpoint
        console.log(response) 
        localStorage.setItem('token',`Bearer ${response.data.token}`)
        return response.data;
    } catch (error) {
        throw new Error(error.response ? error.response.data : 'An error occurred');
    }
};
