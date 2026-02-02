import type { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    try {
      const { jobId, candidateId } = req.body;
      const application = await prisma.application.create({
        data: { jobId, candidateId, status: 'applied' },
      });
      res.status(201).json(application);
    } catch (error) {
      res.status(500).json({ error: 'Failed to apply to job' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
