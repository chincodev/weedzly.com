import { fetchWrapper } from '../_helpers';
import { getApi } from '../_helpers/config';
const baseUrl = getApi+"dispensaries";

export const dispensaryService = {
    getAll,
    getById,
};




function getAll() {
    return fetchWrapper.get(baseUrl);
}

function getById(id) {
    return fetchWrapper.get(`${baseUrl}/${id}`);
}
