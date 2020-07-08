import { getApi } from '../_helpers/config';
import Router from 'next/router'
import { fetchWrapper, history } from '../_helpers';


const baseUrl = getApi;
const accountUrl = getApi+"users";

export const accountService = {
    login,
    logout,
    register,
    verifyEmail,
    forgotPassword,
    validateResetToken,
    resetPassword,
    getAll,
    getById,
    resendToken,
    updateOwn,
    create,
    update,
    delete: _delete,
    updateIsActive,
    userValue
};

function login(email, password) {
    console.log(`${baseUrl}auth/login`)
    return fetchWrapper.post(`${baseUrl}auth/login`, { email, password })
    .then(user => {
        localStorage.setItem('user', JSON.stringify(user));
        return user;
    });
}

function logout() {
    // remove user from local storage and publish null to user subject
    localStorage.removeItem('user');
    Router.push('/login');
}

function resendToken(params) {
    return fetchWrapper.post(`${baseUrl}auth/resend`, params)
}

function register(params) {
    return fetchWrapper.post(`${baseUrl}auth/signup`, params);
}

function verifyEmail(token) {
    return fetchWrapper.post(`${baseUrl}auth/verify/${token}`);
}

function forgotPassword(email) {
    return fetchWrapper.post(`${baseUrl}password/forgot-password`, { email });
}

function validateResetToken(token) {
    return fetchWrapper.post(`${baseUrl}password/validate-token`, { token });
}

function resetPassword(token, password) {
    return fetchWrapper.post(`${baseUrl}password/reset`, { token, password });
}

function getAll(query) {
    var fetchParam=""
    if(!query){fetchParam=`${accountUrl}`}
    else{fetchParam=`${accountUrl}${query}`}
    return fetchWrapper.get(fetchParam);
}

function getById(id) {
    return fetchWrapper.get(`${accountUrl}/${id}`);
}

function create(params) {
    return fetchWrapper.post(accountUrl, params);
}

function updateOwn(id, params) {
    
    return fetchWrapper.put(`${accountUrl}/own/${id}`, params)
    .then(user => { 
        // update stored user if the logged in user updated their own record
        if (user._id === userSubject.value._id) {
            
            // update local storage
            user = { ...userSubject.value, ...user };
            
            localStorage.setItem('user', JSON.stringify(user));
            
            // publish updated user to subscribers
            userSubject.next(user);
        }
        return user;
    });
}

function userValue() {
    // return auth header with jwt if user is logged in and request is to the api url
    var user = localStorage.getItem('user');
    return JSON.parse(user)
}

function update(id, params) {
    
    return fetchWrapper.putUserImg(`${accountUrl}/${id}`, params)
    .then(user => { 
        // update stored user if the logged in user updated their own record
        if (user._id === userSubject.value._id) {
            
            // update local storage
            user = { ...userSubject.value, ...user };
            
            localStorage.setItem('user', JSON.stringify(user));
            
            // publish updated user to subscribers
            userSubject.next(user);
        }
        return user;
    });
}



function updateIsActive(id, params) {
    return fetchWrapper.put(`${accountUrl}/${id}`, params)
}

// prefixed with underscored because delete is a reserved word in javascript
function _delete(id) {
    return fetchWrapper.delete(`${accountUrl}/${id}`)
}
