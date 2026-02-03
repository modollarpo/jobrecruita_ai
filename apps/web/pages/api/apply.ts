import type { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

const backendBase = process.env.BACKEND_URL || 'http://localhost:3001';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    try {
      const backendRes = await axios.post(`${backendBase}/apply`, req.body, {
        headers: { 'Content-Type': 'application/json' },
      });
      res.status(201).json(backendRes.data);
    } catch (error: any) {
      res.status(error.response?.status || 500).json({ error: error.response?.data?.message || 'Failed to apply to job' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
