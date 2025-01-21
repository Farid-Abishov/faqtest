import axios from 'axios';

// Create an axios instance
const api = axios.create({
    baseURL: "https://faq.kvadrat.az/api/",
    headers: {
        "Content-Type": "application/json",
        "Token": "sxim3ddkohcwkxlCmxIOwb22JeWoQBIwTsQpVk6fTiQnB0ecoG",
    },
});

// Function to load user and handle token
export const userLoad = async (userData) => {
    try {
        // Make POST request to the endpoint with user data
        const response = await api.get('control/users/load', userData); 

        // Return response data
        return response.data;

    } catch (error) {
        // Handle error and throw appropriate error message
        throw new Error(error.response ? error.response.data : 'An error occurred');
    }
};

// Interceptor to automatically add the Bearer token to all requests (if available)
api.interceptors.request.use(
    (config) => {
        // Get the token from localStorage
        const token = localStorage.getItem('token');
        if (token) {
            // Add Bearer token to the request header
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        // Handle request error
        return Promise.reject(error);
    }
);

