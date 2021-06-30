import axios from "axios";

let postInstance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/comments'
})

const getComments = () => postInstance('/')
const getComment = (id) => postInstance('/' + id)

export {getComment, getComments}