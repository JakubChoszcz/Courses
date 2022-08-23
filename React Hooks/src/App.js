import React from 'react';
import Context from './components/Context';
import Effect from './components/Effect';
import Ref from './components/Ref';
import State from './components/State';
import ContextProvider from './contexts/contextProvider';

const App = () => {
    return (
        <>
            <State />
            <Effect />
            <Ref />
            <ContextProvider>
                <Context />
            </ContextProvider>
        </>
    )
}

export default App;