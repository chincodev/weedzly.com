import { fetchWrapper } from '../_helpers';
import { getApi } from '../_helpers/config';
const baseUrl = getApi+"categories";

export const categoryService = {
    getAll,
    getById,
    buildAll,
};

function getAll() {
    return fetchWrapper.get(`${baseUrl}`);
}

function buildAll() {
    return fetchWrapper.get(`${baseUrl}/build`);
}


function getById(id) {
    return fetchWrapper.get(`${baseUrl}/${id}`);
}
