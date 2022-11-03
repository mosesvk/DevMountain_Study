

const getAllPosts = (req, res) => {
  res.status(200).send({message: 'Get All Posts Reached'})
}

module.exports = {getAllPosts}