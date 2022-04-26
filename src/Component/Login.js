import React from "react";
import s from "./Login.module.css";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const Login = (props) => {

    return (
        <div>
            <div>
                <h1 className={s.ML}>Модуль эксперт
                    <div className={s.Ivan}>Иван ML-001
                    </div>
                </h1>
            </div>
            <div>
                <div className={s.Input}>
                    <TextField id="outlined-basic" label="Имя пользователя" variant="outlined" value={props.store.userName}/>
                </div>
                <div className={s.Input}>
                    <TextField id="outlined-basic" label="Пароль" variant="outlined" value={props.store.password}/>
                </div>
            </div>
            <div className={s.Button}>
                <Button variant="text">Забыли пароль?</Button>
                <Button variant="contained" color="primary">Вход</Button>
            </div>
            <div className={s.Button_Reg}>
                <Button variant="outlined" color="primary">Зарегистрироваться</Button>
            </div>
        </div>
    )
}

export default Login;
