const { postService } = require('../services');

const getPostsControl = async (_req, res) => {
  const getPosts = await postService.getPosts();
  return res.status(200).json(getPosts);
};

module.exports = {
  getPostsControl,
};
