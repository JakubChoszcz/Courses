import React, { useEffect, useRef, useState } from 'react';

const Ref = () => {
    const [name, setName] = useState('');
    const renderCount = useRef(0);
    const inputRef = useRef();
    const prevName = useRef('');
    
    useEffect(() => {
        renderCount.current = renderCount.current + 1;
        prevName.current = name;
    }, [name])

    const focus = () => {
        inputRef.current.focus();
    }

    return (
        <>
            <input ref={inputRef} value={name} onChange={e => setName(e.target.value)}/>
            <p>My name is {name} and it used to be {prevName.current}</p>
            <p>I rendered {renderCount.current} times</p>
            <button onClick={focus}>Focus</button>
        </>
    )
}

export default Ref;