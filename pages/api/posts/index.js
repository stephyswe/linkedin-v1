import { connectToDatabase } from '../../../util/mongodb'
import { Timestamp } from 'mongodb'

export default async function handler(req, res) {
  const { method, body } = req

  const { db } = await connectToDatabase()

  if (method === 'POST') {
    try {
      const post = await db
        .collection('posts')
        .insertOne({ ...body, timestamp: new Timestamp() })
      res.status(201).json(post)
    } catch (error) {
      res.status(500).json(error)
    }
  }
}