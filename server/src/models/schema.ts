import mongoose, { Document } from "mongoose";

export interface IPost extends Document {
    title: string;
    content: string;
    author: string;
    createdAt: Date;
}

const blogSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true
    },
    content: {
        type: String,
        required: true,
    },
    author: {
        type: String,
        required: true,
    },
    createdDate: {
        type: Date,
        default: Date.now
    },

});

const Blog = mongoose.model('blog', blogSchema);

export default Blog;