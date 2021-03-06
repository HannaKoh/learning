import React from "react";
import s from "./Login.module.css";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import {NavLink} from "react-router-dom";

const Login = (props) => {

    return (
        <div className={s.Login}>
            <div>
                <h1 className={s.ML}>Модуль эксперт
                    <div className={s.Ivan}>Иван ML-001
                    </div>
                </h1>
            </div>
            <div>
                <div className={s.Input}>
                    <TextField className={s.Pole} id="outlined-basic" label="Имя пользователя" variant="outlined" value={props.store.userName}/>
                </div>
                <div className={s.Input}>
                    <TextField className={s.Pole} id="outlined-basic" label="Пароль" variant="outlined" value={props.store.password}/>
                </div>
            </div>
            <div className={s.Button}>
                <NavLink to='/work-window' className={s.navLink}>
                <Button className={s.FontButton} variant="contained" color="primary">Вход</Button>
                </NavLink>
            </div>
            <div className={s.Button_Reg}>
                <NavLink to='/update-password' className={s.navLink}>
                    <Button className={s.FontButtonReg} width='12em' variant="text">Забыли пароль?</Button>
                </NavLink>
                &#183;
                <NavLink to='/registration' className={s.navLink}>
                <Button className={s.FontButtonReg} variant="text">Зарегистрироваться</Button>
                </NavLink>
            </div>
        </div>
    )
}

export default Login;
