import axios from "axios";

let postInstance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/users'
})

const getUsers = () => postInstance('/')
const getUser = (id) => postInstance('/' + id)

export {getUsers, getUser}