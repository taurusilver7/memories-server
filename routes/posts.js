import express from "express";
import { getPosts } from "../controllers/posts.js";

const router = express.Router();

// http://localhost:500/posts/
router.get("/", getPosts);

export default router;
