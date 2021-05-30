import mongoose from 'mongoose'

const PostSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Please provide a name for this post.'],
        maxlength: [20, 'Title cannot be more than 60 characters'],
    },
    description: {

        type: String,
        required: [true, 'Please specify the species of your post.'],
        maxlength: [200, 'Species specified cannot be more than 40 characters'],
    }
})

export default mongoose.models.Post || mongoose.model('Post', PostSchema)
