// the route handler functions for the server routes.
import PostMessage from "../models/postMessage.js";

export const getPosts = async (req, res) => {
  try {
    const postMsg = await PostMessage.find();
    console.log(postMsg);
    res.status(200).json(postMsg);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createPost = async (req, res) => {
  const post = req.body;
  const newPost = new PostMessage(post);

  try {
    await newPost.save();
    res.status(201).json(newPost);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
