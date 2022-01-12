import { useSession, signIn, signOut } from "next-auth/react";

const HomePage = () => {
    const { data: session, loading } = useSession();

    if (!session) {
        return (
            <>
                Not signed in
                <button onClick={signIn}>Sign in</button>
            </>
        )
    } else {
        return (
            <>
                Signed in as {session.user.email}
                <button onClick={signOut}>Sign out</button>
            </>
        )
    }
}

export default HomePage;