import blogModel from "$lib/models/blogModel";
import { json } from "@sveltejs/kit";

export const POST = async ({ request }: import("./$types").RequestEvent) => {
  try {
    const { authorId, blogContent, blogTitle, blogAlias, keyWords } = await request.json();
    if (!authorId || !blogContent || !blogTitle || !blogAlias || !keyWords) return json(null, {
        status: 400
    })
     await blogModel
      .create({
        authorId,
        blogContent,
        blogTitle,
        blogAlias,
        keyWords,
      })
      .catch((e) => {
        console.error(
          `There was an error while pushing data to MongoDB : ${e}`
        );
        return json(null, {
          status: 500,
        });
      });
    return json("The blog has been added to database", {
      status: 200,
    });
  } catch (error) {
    console.error(`An error occured : ${error}`);
    return json(null, {
      status: 500,
    });
  }
};
