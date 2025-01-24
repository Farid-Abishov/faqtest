
import api from '../base'
// Function to handle login request
export const loginUser = async (userData) => {
    try {
        const response = await api.post('/control/login', userData); // Login API endpoint
        console.log(response) 
        localStorage.setItem('token',response.data.token)  
        return response.data;
    } catch (error) {
        throw new Error(error.response ? error.response.data : 'An error occurred');
    }
};
