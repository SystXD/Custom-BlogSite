import blogModel from "$lib/models/blogModel"
export const load = async () => {
    const value = await blogModel.find();
    return {
        blog: value.map((b) => ({
           alias: b.blogAlias
        }))
    }
}