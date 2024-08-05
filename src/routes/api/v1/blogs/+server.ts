import blogModel from "$lib/models/blogModel"
import { json } from "@sveltejs/kit"

export const GET = async () => {
    return json((await blogModel.find()).map((m) => ({
        authorId: m.authorId,
        blogContent: m.blogContent,
        blogTitle: m.blogTitle,
        blogAlias: m.blogAlias
    })))
}