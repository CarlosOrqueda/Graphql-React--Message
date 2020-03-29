import server from './server'
import './database'

(async () => {
    try {
        await server.start({port: 5000}, ({port}) => {
            console.log(`Server on port ${port}`)
        })
    } catch (e) {
        console.log(e)
    }
})()