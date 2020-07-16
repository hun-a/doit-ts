import dotenv from 'dotenv';
import MongoClient from 'mongodb'

dotenv.config()

export const connect = () => new Promise<MongoClient.MongoClient>((resolve, reject) => 
  MongoClient.connect(
    process.env.DB_CONNECTION,
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(resolve)
  .catch(reject)
)