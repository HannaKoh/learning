import React from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import s from './Registration.module.css'

const Registration = (props) => {

    return (

        <div>
            <div>
                <h1>Создайте учетную запись</h1>
                <div className={s.Input}>
                    <TextField id="outlined-basic" label="Фамилия" variant="outlined" value={props.store.lastName}/>
                </div>
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
                    <TextField id="outlined-basic" label="Пароль" variant="outlined" value={props.store.registrationPage.password}/>
                </div>
            </div>
            <div className={s.Button}>
                <Button variant="contained" color="primary">Зарегистрироваться</Button>
            </div>
            <div className={s.Button}>
                <Button variant="outlined" color="primary">Закрыть</Button>
            </div>
        </div>

    )
}

export default Registration;