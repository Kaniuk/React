import {urls} from "../configs/urls";

const getAll = () => {
    return fetch(urls.users)
        .then(value => value.json());
};

const getById = (id) => {
    return fetch(`${urls.users}/${id}`)
        .then(value => value.json());
};

const getCommentsById = (id) => {
    return fetch(`${urls.users}/${id}/posts`)
        .then(value => value.json());
};

export const userService = {
    getAll,
    getById,
    getCommentsById
};