import { redirect } from "@sveltejs/kit";
import { authEmail } from "$env/static/private";
export const load = async (event) => {
    const session = await event.locals.auth();
    console.log(session);
    
  if (session && !session.user?.email?.startsWith(authEmail))
    throw redirect(308, "/");
}