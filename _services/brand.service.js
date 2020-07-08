import { fetchWrapper } from '../_helpers';
import { getApi } from '../_helpers/config';
const baseUrl = getApi+"brands";

export const brandService = {
    getAll,
    getById,
    buildAll,
};

function getAll(query) {
    var fetchParam=""
    if(!query){fetchParam=`${baseUrl}`}
    else{fetchParam=`${baseUrl}${query}`}
    return fetchWrapper.get(fetchParam);
}

function buildAll() {
    return fetchWrapper.get(`${baseUrl}/build`);
}


function getById(id) {
    return fetchWrapper.get(`${baseUrl}/${id}`);
}
