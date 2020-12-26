import { connectToDatabase } from 'lib/mongodb';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function Hi(_req: NextApiRequest, res: NextApiResponse) {
  const { db } = await connectToDatabase();
  const feedback = await db.collection(`feedback`).find({}).limit(20).toArray();
  res.status(200).send(feedback);
}
