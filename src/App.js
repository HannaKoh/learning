import React from 'react';
import './App.css';
import Start from "./Component/start";
import Registration from "./Component/Registration";
import Login from "./Component/Login";

const App = (props) => {
    return (
        <div className="App">
            <header>
                <Registration store={props.store.registrationPage}/>
                <Login store={props.store.loginPage}/>
            </header>
        </div>

    );
}

export default App;
