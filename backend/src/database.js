import mongoose from 'mongoose'

const dbOptions = {
    useNewUrlParser: true,
    useUnifiedTopology: true
}

async function connect() {
    try {
        await mongoose.connect('mongodb://localhost/graphqlreactdb', dbOptions)
        console.log('DB is connected')
    } catch (e) {
        console.log(e)
    }
}

module.exports = connect()