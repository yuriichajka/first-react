import axios from "axios";


let postInstance = axios.create({
    baseURL: 'https://reqres.in/api'
})

const getUsers = () => postInstance('/users')
const getUser = (id) => postInstance('/users/' + id)
const getUserDetails = (id) => postInstance('/users/' + id)

export {getUsers, getUserDetails, getUser}