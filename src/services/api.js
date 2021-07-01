import axios from "axios";

let postInstance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com'
})


const getUser = () => postInstance.get('/users/')

const getPostOfUser = (id) => postInstance.get('/users/' +id+ '/posts')

const getPosts = () => postInstance.get('/users/')
const getPost = (id) => postInstance.get('/users/' + id)

export {getUser, getPost, getPosts, getPostOfUser}