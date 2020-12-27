import { connectToDatabase } from 'lib/mongodb';
import { Db } from 'mongodb';
import { NextApiRequest, NextApiResponse } from 'next';

const dbCollection = `feedback`;

export default async function Hi(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === `GET`) {
    const { db }: { db: Db } = await connectToDatabase();
    const feedback = await db
      .collection(dbCollection)
      .find({})
      .limit(20)
      .toArray();
    res.status(200).send(feedback);
  } else if (req.method === `POST`) {
    try {
      const {
        name,
        email,
        comments,
      }: { name: string; email: string; comments: string } = req.body;
      const errors: string[] = [];
      if (!name || name === ``) {
        errors.push(`Name field not present/invalid.`);
      }
      if (email.match(/(.+)@(.+)(\..+)+/g) == null) {
        errors.push(`Invalid email.`);
      }
      if (comments.length === 0) {
        errors.push(`Comment must be present.`);
      }
      if (errors.length > 0) {
        res.status(400).json({ error: { request: errors } });
        return;
      }
      const { db }: { db: Db } = await connectToDatabase();
      const feedback = await db
        .collection(dbCollection)
        .insertOne({ name, email, comments });
      res.status(200).send({ success: { id: feedback.insertedId } });
    } catch (error) {
      res.status(500).json({ error: { server: error } });
    }
  } else {
    res.status(400).send(`Bad Request`);
  }
}
