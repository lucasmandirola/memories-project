import axios from 'axios';

const URLBack = 'http://localhost:5000';

export const fetchPosts = () => axios.get(`${URLBack}/posts`)
export const createPost = (newPost) => axios.post(`${URLBack}/posts`, newPost) 
export const updatePost = (id, updatedPost) => axios.patch(`${URLBack}/posts/${id}`, updatedPost)