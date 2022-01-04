Next.js

==== Features & Benefits ====

Server-side Rendering
Routes

==== Commands ====

npx create-next-app@latest <= creates a new Next.js project
npm install
npm run dev <= starts development server

npm run build <= command before deploy




export const getServerSideProps = async (context) => {
    const { req, res } = context;
    console.log(req, res);

    // fetch data from API

    return {
        props: {
            meetups: DUMMY_MEETUPS
        }
    }
}

export const getStaticProps = async () => {
    // fetch data from API

    return {
        props: {
            meetups: DUMMY_MEETUPS
        },
        revalidate: 10,
    };
}