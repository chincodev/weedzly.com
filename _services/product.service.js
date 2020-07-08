import { fetchWrapper } from '../_helpers';
import { getApi } from '../_helpers/config';
const baseUrl = getApi+"products";

export const productService = {
    getAll,
    getById,
    getRetailers,
    buildAll,
    getBySlugAndBrand,
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


function getRetailers(id) {
    return fetchWrapper.get(`${baseUrl}/${id}/retailers`);
}

function getBySlugAndBrand(params) {
    return fetchWrapper.get(`${baseUrl}/brand_and_slug?brand=${params.brand}&product=${params.product}`);
}