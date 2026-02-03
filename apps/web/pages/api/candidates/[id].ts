import type { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

const backendBase = process.env.BACKEND_URL || 'http://localhost:3001';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;
  if (req.method === 'GET') {
    try {
      const backendRes = await axios.get(`${backendBase}/candidates/${id}`);
      res.status(200).json(backendRes.data);
    } catch (error: any) {
      if (error.response?.status === 404) {
        res.status(404).json({ error: 'Not found' });
      } else {
        res.status(error.response?.status || 500).json({ error: error.response?.data?.message || 'Failed to fetch candidate' });
      }
    }
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
