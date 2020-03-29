import Message from '../../models/Message'

const Query = {
    messages: async () => {
        return await Message.find().lean()
    }
}

export default Query