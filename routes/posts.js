import express from "express";

const router = express.Router();

// http://localhost:500/posts/
router.get("/", (req, res) => {
  res.send("This works");
});

export default router;
