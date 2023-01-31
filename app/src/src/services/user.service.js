import axios from 'axios';

const API_URL = `http://localhost:8000/api/users`;

const getAll = async () => {
    const response = await axios.get(API_URL);
    return response.data;
}

const update = async (data) => {
    const response = await axios.put(`${API_URL}/${data._id}`, data);
    return response.data;
}

const UserService = {
    getAll,
    update
}

export default UserService;