import { SvelteKitAuth } from '@auth/sveltekit'
import Github from '@auth/sveltekit/providers/github'
import { clientId, clientSecret, authSecret } from '$env/static/private'
import { dev } from '$app/environment'

export const { handle, signIn, signOut } = SvelteKitAuth({
    providers: [Github({
        clientId,
        clientSecret
    })],
    secret: authSecret,
    trustHost: dev
})

