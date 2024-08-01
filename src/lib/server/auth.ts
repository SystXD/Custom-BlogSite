import { SvelteKitAuth } from '@auth/sveltekit'
import Github from '@auth/sveltekit/providers/github'
import { clientId, clientSecret, authSecret, authEmail } from '$env/static/private'
import { dev } from '$app/environment'

export const { handle, signIn, signOut } = SvelteKitAuth({
    providers: [Github({
        clientId,
        clientSecret
    })],
    callbacks: {
        jwt({ token, user }) {
            if (user) {
                token.emailId = user.email
                token.thumbnail = user.image
            }
            return token
        },
        session({ session, token }) {
            session.user.email = token.emailId as string
            session.user.image = token.thumbnail as string
            return session
        }
    },
    secret: authSecret,
    trustHost: dev
})


