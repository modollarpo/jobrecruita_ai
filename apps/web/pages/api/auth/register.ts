import type { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    try {
      const backendRes = await axios.post('http://localhost:3001/auth/register', req.body, {
        headers: { 'Content-Type': 'application/json' },
      });
      res.status(200).json(backendRes.data);
    } catch (error: any) {
      res.status(error.response?.status || 500).json({ error: error.response?.data?.message || 'Registration failed' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
