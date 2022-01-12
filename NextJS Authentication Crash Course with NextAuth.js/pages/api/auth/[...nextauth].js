// http://localhost:3000/api/auth/[...nextauth]

import NextAuth from "next-auth/next";
import TwitterProvider from "next-auth/providers/twitter";
import GithubProvider from 'next-auth/providers/github';

console.log(process.env.GITHUB_ID);
console.log(process.env.GITHUB_SECRET);

export default NextAuth({
    providers: [
        GithubProvider({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET
        }),
        TwitterProvider({
            clientId: process.env.TWITTER_ID,
            clientSecret: process.env.TWITTER_SECRET
        }),
        // Providers.Email({
        //     server: {
        //         host: "",
        //         port: "",
        //         auth: {
        //             user: "",
        //             pass: ""
        //         }
        //     },
        //     from: ""
        // })
    ]
})