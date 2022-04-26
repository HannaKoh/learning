import React from "react";
import logo from './ai.svg';
import s from "./start.module.css";
import Button from '@mui/material/Button';
import {Registration} from "./Registration";


const Start = () => {
    return (
        <div>
            <img className={s.Img} align="left" src={logo}/>
            <div className={s.startPage}>
                <div>
                    <h1 className={s.ML}>Модуль эксперт
                        <div className={s.Ivan}>Иван ML-001
                        </div>
                    </h1>
                </div>
                <div className={s.Registration}>
                    <h2 align="left">Помогайте обучать искусственный
                        <div>интелект!</div>
                    </h2>
                    <Button variant = "contained" color = "primary">Зарегистрируйтесь</Button>
                </div>
                <div>
                    <h3 align="left" >Уже зарегистрированы?</h3>
                    <Button variant = "outlined" color = "primary">Войти</Button>
                </div>
            </div>
        </div>
    )
}

export default Start;