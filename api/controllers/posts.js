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