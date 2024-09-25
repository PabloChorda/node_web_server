
// const { envs } = require('./config/env')
import { envs } from './config/env.js'

import { startServer } from './server/server.js'
// const { startServer } = require('./server/server')


const main = () => {
    startServer({
        port: envs.PORT,
        public_path: envs.PUBLIC_PATH
    })
}



// Función agnóstica autoconvocada
// Agnóstica porque no tien nombre
// Autoconvocada porque la ejecutamos con los parentesis

( async () => {
    main()
})()
