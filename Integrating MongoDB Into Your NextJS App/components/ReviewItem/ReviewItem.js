import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";


const ReviewItem = ({ id, name, image, description }) => {
    const router = useRouter();

    const handle = (id) => {
        router.push(`/reviews/${id}`)
    }

    return (
        <li>
            <h3>{name}</h3>
            <img 
                src={image}
                width={60}
                height={60}
                alt="Review Image"
            />
            <p>description</p>
            <button onClick={() => handle(id)}>See More</button>
        </li>
    )
}

export default ReviewItem;