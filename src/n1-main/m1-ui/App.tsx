import React from 'react';
import './App.css';
import { Header } from './header/Header';
import { Main } from './main/Main';
import { Routing } from './routes/Routing';

function App() {
    return (
        <div className="App">
            <div>
                <Header/>
                <Routing/>
                {/*<Main/>*/}
            </div>
        </div>
    );
}

export default App;
