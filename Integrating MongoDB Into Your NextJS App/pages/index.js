import ReviewsList from '../components/ReviewsList/ReviewsList';
import { connectToDatabase } from '../lib/mongodb';

const Home = ({ properties }) => {
  return (
    <div>
      <ReviewsList reviews={properties}/>
    </div>
  )
}

export const getServerSideProps = async (context) => {
  const { db } = await connectToDatabase();

  const data = await db.collection("listingsAndReviews").find({}).limit(10).toArray();

  const properties = JSON.parse(JSON.stringify(data));

  return {
    props: {
      properties
    }
  }
}

export default Home;