import instance from './api.service';

const getAll = async () => {
    const response = await instance.get('/shops');
    return response.data;
}

const create = async (credentials) => {
    const response = await instance.post('/shops', credentials);
    return response.data;
}

const ShopService = {
    getAll,
    create
}

export default ShopService;