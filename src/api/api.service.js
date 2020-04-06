const apiBaseUrl = 'https://api.github.com';
const options = { headers: {'Authorization': 'token 26890e0bce9f719d7b6f55f98b68081877a4c6b6'} };

export default class Api {
    getUsers() {
        const url = apiBaseUrl + '/users';
        return fetch(url, options).then(res => res.json());
    }

    getUserInfo(login) {
        const url = apiBaseUrl + '/users/' + login;
        return fetch(url, options).then(res => res.json());
    }

    getUserRepo(login) {
        const url = apiBaseUrl + '/users/' + login + '/repos';
        return fetch(url, options).then(res => res.json());
    }
}