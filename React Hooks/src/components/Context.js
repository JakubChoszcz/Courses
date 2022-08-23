import React from 'react';
import { useTheme, useThemeUpdate } from '../contexts/contextProvider';

const Context = () => {
    const darkTheme = useTheme();
    const toggleTheme = useThemeUpdate();

    const theme = {
        backgroundColor: darkTheme ? 'gray' : 'lightgray',
        color: darkTheme ? 'white' : 'black'
    }

    return (
        <>
            <p style={theme}>Context</p>
            <button onClick={toggleTheme}>Change Theme</button>
        </>
    )
}

export default Context;