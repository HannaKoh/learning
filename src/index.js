import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import './App.css';
import reportWebVitals from './reportWebVitals';
import store from './Component/redux/store';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Registration from "./Component/Registration";
import Login from "./Component/Login";
import Start from "./Component/start";


    ReactDOM.render(
        <BrowserRouter>
        <React.StrictMode>
            {/*<App />*/}
            <div className="App">
                {/*<Start />*/}
            <Routes >
                <Route path='/' element={<Start />} />
                <Route path='/registration'  element={<Registration store={store.registrationPage}/>} />
                <Route path='/login' element={<Login store={store.loginPage}/>} />
            </Routes>
            </div>
        </React.StrictMode>
            </BrowserRouter>,
        document.getElementById('root')
    );


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

