import { createAxiosInstance } from "./common";
import { AxiosRequestConfig } from 'axios'
import { Person } from "../pages/search";

const options: AxiosRequestConfig = {
    baseURL: 'https://localhost:7188/api/users'
    // headers: {
    //     "Access-Control-Allow-Methods": "GET, POST, DELETE, PATCH, OPTIONS"
    // }
}

const api = createAxiosInstance(options)

export const search = async (firstName = '', lastName = '', email = ''): Promise<Person[]> => {
    return api
        .get('/search', {
            params: {
                firstName, lastName, email
            }
        })
        .then(response => response.data)
        .catch(() => [])
}

export const addUser = async (person: Partial<Person>): Promise<boolean> => {
    return api.post('/', person)
        .then(response => response.data)
        .catch(() => { })
}

export const editUser = async (person: Partial<Person>): Promise<boolean> => {
    return api.patch('/', person)
        .then(response => response.data)
        .catch(() => { })
}

export const deleteUser = async (id: number): Promise<boolean> => {
    return api.delete('/', { params: { id } })
        .then(response => response.data)
        .catch(() => { })
}