import React, { useEffect, useState } from 'react';

const Effect = () => {
    const [resourceType, setResourceType] = useState('posts');
    // const [items, setItems] = useState([]);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    const handleResize = () => {
        setWindowWidth(window.innerWidth);
    }

    useEffect(() => {
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        }
    }, [])

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
            .then(response => response.json())
            // .then(json => setItems(json))
    }, [resourceType])

    useEffect(() => {
        console.log('on mount');
    }, [])

    useEffect(() => {
        console.log('render');
    })

    return (
        <>  
            <p>{windowWidth}</p>
            <button onClick={() => setResourceType('posts')}>Posts</button>
            <button onClick={() => setResourceType('users')}>Users</button>
            <button onClick={() => setResourceType('comments')}>Comments</button>
            <p>{resourceType}</p>
            {/* {items.map(item => {
                return <pre>{JSON.stringify(item)}</pre>
            })} */}
        </>
    )
}

export default Effect;