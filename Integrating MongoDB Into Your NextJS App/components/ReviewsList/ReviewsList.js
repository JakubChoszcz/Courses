import ReviewItem from '../ReviewItem/ReviewItem';

const ReviewList = ({reviews}) => {
    return (
        <ul>
            {reviews.map(review => 
                <ReviewItem 
                    key={review._id} 
                    id={review._id}
                    name={review.name}
                    image={review.images.picture_url}
                    description={review.description}
                />
            )}
        </ul>
    )
}

export default ReviewList;