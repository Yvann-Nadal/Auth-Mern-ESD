import instance from './api.service';

const API_URL = 'http://localhost:8000/api/auth';

const signup = async (credentials) => {
    const response = await instance.post(`${API_URL}/signup`, credentials);
    return response.data;
}

const signin = async (credentials) => {
    const response = await instance.post(`${API_URL}/signin`, credentials);
    return response.data;
}

const AuthService = {
    signup,
    signin
}

export default AuthService;