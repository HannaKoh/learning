import React from "react";
import {changeRegistration} from "./actionCreators/Registration";
import {connect} from "react-redux";
import {registration} from "./reducer/registration";

class RegistrationComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            firstname: '',
            lastname: '',
            secondname: '',
            password: ''
        }
    }

    onClickChangeRegistration = (e) => {
        this.props.onChangeRegistration(this.state.username)
    }

    changeLocalRegistration = (e) => {
        this.setState({username: e.target.value})
    }
    changeLocalFirstName = (e) => {
        this.setState({firstname: e.target.value})
    }
    changeLocalLastName = (e) => {
        this.setState({lastname: e.target.value})
    }
    changeLocalSecondName = (e) => {
        this.setState({secondname: e.target.value})
    }
    changeLocalPassword = (e) => {
        this.setState({password: e.target.value})
    }

    render() {
        return (
            <div>
                <div>
                    <p>{this.props.registration}</p>
                    <p>Имя пользователя</p>
                    <input onChange={this.changeLocalRegistration}></input>
                    <p>Имя</p>
                    <input onChange={this.changeLocalFirstName}></input>
                    <p>Фамилия</p>
                    <input onChange={this.changeLocalLastName}></input>
                    <p>Отчество</p>
                    <input onChange={this.changeLocalSecondName}></input>
                    <p>Пароль</p>
                    <input onChange={this.changeLocalPassword}></input>
                </div>
                <div>
                    <button onClick={this.onClickChangeRegistration}>Зарегистрироваться</button>
                    <button>Закрыть</button>
                </div>
            </div>

        )
    }
}

const mapStateToProps = state => {
    return {
        registration: state.registration
    }
}
const mapDispatchToProps = dispatch => {
    return {
        onChangeRegistration: registration => {
            dispatch(changeRegistration(registration))
        }
    }
}

export const Registration = connect(mapStateToProps, mapDispatchToProps)(RegistrationComponent);