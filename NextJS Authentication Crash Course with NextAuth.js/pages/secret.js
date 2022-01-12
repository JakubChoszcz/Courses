// http://localhost:3000/api/auth/[...nextauth]

import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";

export default async () => {
    const { data: session, loading } = useSession();
    const [content, setContent] = useState();    

    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch('/api/secret/');
            const json = await res.json();

            if (json.content) {
                setContent(json.content);
            }
        }
        fetchData();
    }, [session])

    if (typeof window !== "undefined" && loading) {
        return null;
    }

    if (!session) {
        return (
            <div>
                <h1>You aren`t signed in, pleace signed in first.</h1>
            </div>
        )
    } else {
        return (
            <div>
                <h1>Protected page</h1>
                <p>{content}</p>
            </div>
        )
    }
}