import instance from './api.service';

const create = async (credentials) => {
    const response = await instance.post('/shops', credentials, config);
    return response.data;
}

const ShopService = {
    create
}

export default ShopService;