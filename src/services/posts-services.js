import axios from "axios";

let postInstance1 = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/posts'
})

const getPosts = () => postInstance1('/')
const getPost = (id) => postInstance1('/' + id)

export {getPost, getPosts}