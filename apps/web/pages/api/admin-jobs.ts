import type { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

const backendBase = process.env.BACKEND_URL || 'http://localhost:3001';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    try {
      const backendRes = await axios.get(`${backendBase}/admin/jobs`);
      res.status(200).json(backendRes.data);
    } catch (error: any) {
      res.status(error.response?.status || 500).json({ error: error.response?.data?.message || 'Failed to fetch jobs' });
    }
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
