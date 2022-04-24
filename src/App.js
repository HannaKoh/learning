import React from 'react';
import './App.css';
import {List} from "./Component/List";
import {CalcButton} from "./Component/Calc";
import Start from "./Component/start";

// const number = ['Hanna','Nikolay','Alexsandr','Anastasia','Andrue'];


function App() {
    return (
        <div className="App">
            <header>
                {/*<List item={number} />*/}
                <Start />
                {/*<CalcButton />*/}
            </header>
        </div>

    );
}

export default App;
