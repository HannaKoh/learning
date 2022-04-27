import React from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import s from './Registration.module.css'
import {NavLink} from "react-router-dom";

const TextAreaItem = (props) => {
    return <div className={s.Input}>
        <TextField id="outlined-basic" label="Фамилия" variant="outlined" value={props.name.lastName}/>
    </div>
}

const Registration = (props) => {

    return (

        <div>
            <div>
                <h1>Создайте учетную запись</h1>
                <TextAreaItem name={props.store}/>
                <div className={s.Input}>
                    <TextField id="outlined-basic" label="Имя" variant="outlined" value={props.store.firstName}/>
                </div>
                <div className={s.Input}>
                    <TextField id="outlined-basic" label="Отчество" variant="outlined" value={props.store.secondName}/>
                </div>
                <div className={s.Input}>
                    <TextField id="outlined-basic" label="Имя пользователя" variant="outlined" value={props.store.userName}/>
                </div>
                <div className={s.Input}>
                    <TextField id="outlined-basic" label="Пароль" variant="outlined" value={props.store.password}/>
                </div>
            </div>
            <div className={s.Button}>
                <NavLink to='/login' className={s.navLink}>
                <Button variant="contained" color="primary">Зарегистрироваться</Button>
                </NavLink>
            </div>
            <div className={s.Button}>
                <NavLink to='/start' className={s.navLink}>
                <Button variant="outlined" color="primary">Закрыть</Button>
                </NavLink>
            </div>
        </div>

    )
}

export default Registration;