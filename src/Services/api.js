import axios from 'axios';
let axiosInstance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/',
})

const getPosts = () => axiosInstance.get('posts/');
const getUsers = () => axiosInstance.get('users/');
const getUsersPosts = (id) => axiosInstance.get('users/' + id + 'posts/');
const getPost = (id) => axiosInstance.get('posts/' + id);

export {getPost, getUsers, getUsersPosts, getPosts};