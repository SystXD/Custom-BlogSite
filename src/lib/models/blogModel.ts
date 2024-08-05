import { Schema, model } from 'mongoose'
import type { Structure } from '$lib/utils/types/blogType'
import { randomId } from '$lib/utils/functions/randomId'

export default model<Structure>(
    'blogModel',
    new Schema({
        authorId: String,
        blogContent: String,
        blogTitle: String,
        blogId: { type: String, default: randomId(6) as string },
        blogAlias: String,
        createdAt: { type: Date, default: new Date() },
        keyWords: [String]
    })
)