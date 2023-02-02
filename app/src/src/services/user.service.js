import instance from './api.service';

const API_URL = `http://localhost:8000/api/users`;

const getAll = async () => {
    const response = await instance.get(API_URL);
    return response.data;
}

const update = async (credentials, id) => {
    const response = await instance.put(`${API_URL}/${id}`, credentials);
    return response.data;
}

const UserService = {
    getAll,
    update
}

export default UserService;