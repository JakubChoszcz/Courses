Next.js

==== Features & Benefits ====

Server-side Rendering
Routes

==== Commands ====

npx create-next-app@latest <= creates a new Next.js project
npm install
npm run dev <= starts development server

npm run build <= command before deploy

npm i mongodb



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

Only Allowed in a Page
getStaticProps can only be exported from a page. You can’t export it from non-page files.

One of the reasons for this restriction is that React needs to have all the required data before the page is rendered.