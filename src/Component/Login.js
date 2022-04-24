import React from "react";
import {changeLogin} from "./actionCreators/Login";
import {connect} from "react-redux";
import {login} from "./reducer/login";

    class LoginComponent extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                username: '',
                password: ''
            }
        }

        onClickChangeLogin = (e) => {
            if (this.state.username === 'Anna' && this.state.password === '2111994') {
                return this.props.onChangeLogin(this.state.username)
            } else {
                if (this.state.username != 'Anna' && this.state.password === '2111994') {
                    return alert('Не правильно введено имя пользователя')
                } else {
                    if (this.state.username === 'Anna' && this.state.password != '2111994') {
                        return alert('Не правильно введен пароль')
                    } else {
                        return alert('Не правильно введено имя пользователя и пароль')
                    }
                }
            }
        }

        changeLocalLogin = (e) => {
            this.setState({username: e.target.value})
        }
        changeLocalPassword = (e) => {
            this.setState({password: e.target.value})
        }

        render() {
            return (
                <div>
                    <div>
                        <p>{this.props.login}</p>
                        <p>Имя пользователя</p>
                        <input id='Имя пользователя' onChange={this.changeLocalLogin}></input>
                        <p>Пароль</p>
                        <input onChange={this.changeLocalPassword}></input>
                    </div>
                    <div>
                        <button onClick={this.onClickChangeLogin}>Вход</button>
                        <button >Регистрация</button>
                    </div>
                </div>

            )
        }
    }

    const mapStateToProps = state => {
        return {
            login: state.login
        }
    }
    const mapDispatchToProps = dispatch => {
        return {
            onChangeLogin: login => {
                dispatch(changeLogin(login))
            }
        }
    }

    export const Login = connect(mapStateToProps, mapDispatchToProps)(LoginComponent);
