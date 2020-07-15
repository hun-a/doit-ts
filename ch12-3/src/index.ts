import {connect} from './mongodb/connect'
import {runServer} from './runServer'

connect()
  .then(connection => connection.db('test'))
  .then(runServer)
  .catch((e: Error) => console.log(e.message))