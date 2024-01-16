const express = require('express');
const router = express.Router();
const { Comment } = require('../../models/');
const authenticateUser = require('../../utils/auth');

router.post('/', authenticateUser, async (req, res) => {
  try {
    const createdComment = await Comment.create({
      ...req.body,
      userId: req.session.userId,
    });
    res.json(createdComment);
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;

