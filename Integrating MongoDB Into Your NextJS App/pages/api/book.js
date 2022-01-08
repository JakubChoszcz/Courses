import { connectToDatabase } from "../../lib/mongodb";

const book = async (res, res) => {
    const { db } = await connectToDatabase();

    const data = req.query;

    const response = await db.collection("bookings").insertOne(data);

    res.json(response);
}

export default book;