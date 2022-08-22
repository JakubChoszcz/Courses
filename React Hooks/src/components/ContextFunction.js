import React from 'react';
import { useTheme, useThemeUpdate } from '../contexts/contextProvider';

const ContextFunction = () => {
    const darkTheme = useTheme();
    const toggleTheme = useThemeUpdate();

    const theme = {
        backgroundColor: darkTheme ? 'gray' : 'lightgray',
        color: darkTheme ? 'white' : 'black'
    }

    return (
        <>
            <p style={theme}>ContextFunction</p>
            <button onClick={toggleTheme}>Change Theme</button>
        </>
    )
}

export default ContextFunction;