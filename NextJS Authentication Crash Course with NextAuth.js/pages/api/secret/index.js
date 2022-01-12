// http://localhost:3000/api/auth/secret

import { getSession } from 'next-auth/react';

export default async (req, res) => {
    const session = await getSession({ req });

    if (session) {
        res.send({
            conent: "Welcome to the secret page."
        })
    } else {
        res.send({
            error: "You need to be signed in."
        })
    }
}