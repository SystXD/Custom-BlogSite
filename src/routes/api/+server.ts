import { json } from '@sveltejs/kit'
export function GET () {
    return json("The Api is online")
}