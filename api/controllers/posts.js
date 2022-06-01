import mongoose from "mongoose"
import PostMessage from "../models/postMessage.js"



export const getPosts = async (req, res) => {
  try {
    const postMessages = await PostMessage .find()
    res.send(postMessages)
  }
  catch(err){
    console.log(err)
  }
}

export const createPost = async (req, res) => {
  const post = req.body;
  const newPost = new PostMessage(post)
  try {
    await newPost.save()
    res.send(newPost)
  }
  catch(err){
    console.log(err)
  }
}

export const updatePost = async (req, res) => {
  const {id: _id} = req.params
  const post = req.body

  if(!mongoose.Types.ObjectId.isValid(_id)) return res.send('No post with that id')
  else {
    const updatePost = await PostMessage.findByIdAndUpdate(_id, {...post, _id}, {new: true})
    res.send(updatePost)
  }
}

export const deletePost = async (req, res) => {
  const {id} = req.params
  if(!mongoose.Types.ObjectId.isValid(id)) return res.send('No post with that id')
  else{
    await PostMessage.findByIdAndRemove(id)
    res.send({msg:'Post deleted'})
  }
}

export const likePost = async (req, res) => {
  const {id} = req.params
  if(!mongoose.Types.ObjectId.isValid(id)) return res.send('No post with that id')
  else{
    const post = await PostMessage.findById(id)
    const updatedPost = await PostMessage.findByIdAndUpdate(id, {likeCount: post.likeCount + 1}, {new: true})
    res.send(updatedPost)
  }
}