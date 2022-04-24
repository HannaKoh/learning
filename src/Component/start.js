import React from "react";
import {Login} from "./Login";
import {Registration} from "./Registration";


const Start = () => {
    return (
        <div>
            <div>
                <Registration/>
            </div>
            <div>
                <Login/>
            </div>
        </div>
    )
}

export default Start;