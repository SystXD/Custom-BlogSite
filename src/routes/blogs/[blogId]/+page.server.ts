import { json } from '@sveltejs/kit';
export function load ({ params }) {
    return { id: params.blogId }
}