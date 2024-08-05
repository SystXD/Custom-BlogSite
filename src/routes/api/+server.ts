export const GET = () => {
    return new Response("The api is online", {
        status: 200,
        headers: { "Content-Type": "application/json" }
    })
}