import Tournament from '../../../models/Tournament';
export default async function handler(req, res) {
  if (req.method === 'GET') {
    const { id } = req.query;
    const tournament = await Tournament.findOne({ _id: id });

    if (!tournament) {
      return res.status(400).json({ error: 'Tournament not found' });
    }
    console.log(tournament);
    return res.status(200).json({ tournament });
  } else {
    res.status(200).json({ error: 'Not allowed' });
  }
}
