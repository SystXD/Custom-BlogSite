import { Schema, model } from 'mongoose'
import type { Structure } from '$lib/utils/types/blogType'

export default model<Structure>(
    'blogModel',
    new Schema({
        authorId: String,
        blogContent: String,
        blogTitle: String,
        blogAlias: String,
        createdAt: { type: Date, default: new Date() },
        keyWords: [String]
    })
)