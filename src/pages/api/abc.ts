import { connectToDatabase } from 'lib/mongodb';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function Hi(_req: NextApiRequest, res: NextApiResponse) {
  const { db } = await connectToDatabase();
  const movies = await db.collection(`testing123`).find({}).limit(20).toArray();
  res.status(200).send(movies);
}
