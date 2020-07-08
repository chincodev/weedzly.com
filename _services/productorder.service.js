import { fetchWrapper } from '../_helpers';
import { getApi } from '../_helpers/config';
const baseUrl = getApi+"productorders";

export const productOrderService = {
    getAll,
    create,
    update,
    _delete
};

function getAll(query) {
    var fetchParam=""
    if(!query){fetchParam=`${baseUrl}`}
    else{fetchParam=`${baseUrl}${query}`}
    return fetchWrapper.get(fetchParam);
}

function create(params) {return fetchWrapper.post(baseUrl, params);}

function update(id, params) {return fetchWrapper.put(`${baseUrl}/${id}`, params)}

function _delete(id) {return fetchWrapper.delete(`${baseUrl}/${id}`)}

