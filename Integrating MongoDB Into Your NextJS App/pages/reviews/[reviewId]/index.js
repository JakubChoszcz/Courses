import { connectToDatabase } from "../../../lib/mongodb";

export const getStaticPaths = async (req, res) => {
    const { db } = await connectToDatabase();

    const getData = await db.collection("listingsAndReviews").find({}).limit(10).toArray();

    const data = JSON.parse(JSON.stringify(getData));

    const paths = data.map(item => { return paths: {item._id}});

    console.log(paths);

    return {
        paths,
        fallback: false
    }
}

const Review = (gowno) => {
    console.log(gowno);
    return (
        <div>

        </div>
    )
}

export default Review;