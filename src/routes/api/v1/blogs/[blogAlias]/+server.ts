import blogModel from "$lib/models/blogModel";
import { json } from "@sveltejs/kit";

export const GET = async ({ params }: import("./$types").RequestEvent) => {
  try {
    const blogValue = await blogModel.findOne({ blogAlias: params.blogAlias });
    if (blogValue) return json(blogValue, { status: 200 });
    else
      return json(`Can't find any blog with alias ${params.blogAlias}`, {
        status: 404,
      });
  } catch (error) {
    console.error(`Error occured : ${error}`);
    return json(null, {
      status: 500,
    });
  }
};
