import Post from '../../models/Post';

export default async function handler(req, res) {
  if (req.method === 'GET') {
    const posts = await Post.find({});
    res.status(200).json(posts);
  }

  
}
