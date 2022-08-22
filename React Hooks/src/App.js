import React from 'react';
import ContextFunction from './components/ContextFunction';
import Ref from './components/Ref';
import ContextProvider from './contexts/contextProvider';

const App = () => {
    return (
        <>
            <Ref />
            <ContextProvider>
                <ContextFunction />
            </ContextProvider>
        </>
    )
}

export default App;