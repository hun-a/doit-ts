import { connect } from '../mongodb/connect'

const connectTest = async () => {
  let connection;
  try {
    connection = await connect()
    const db = await connection.db('test')
    console.log('db', db)
  } catch (e) {
    console.log(e.message)
  } finally {
    connection && connection.close()
  }
}

connectTest()