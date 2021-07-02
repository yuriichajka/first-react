import axios from "axios";


let postInstance = axios.create({
    baseURL: 'https://reqres.in/api'
})

const getUsers = () => postInstance('/users')

export {getUsers}