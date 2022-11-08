import Post from '../../models/Post';

export default async function handler(req, res) {
  if (req.method === 'GET') {
    const posts = await Post.find({}).populate("author");
    res.status(200).json(posts);
  } else {
    const newPost = Post.create({author: req.body.authorId, title: req.body.title, content: req.body.content})
    res.status(200).json(newPost);
  }
}
