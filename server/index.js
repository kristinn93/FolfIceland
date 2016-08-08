import app from './server'
import config from './config'

const server = app()
server.listen(config.PORT)
