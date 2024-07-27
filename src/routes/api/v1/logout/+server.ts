import { signOut } from "@auth/sveltekit/client"
import { json } from "@sveltejs/kit"

export async function GET () {
   await signOut()
   return json("The user has been logged out", { status: 200 })
}