import React, { useState } from 'react'
import { connect } from 'react-redux';
import { Button } from '../../components/UI/Button/Button';
import Input from '../../components/UI/Input/Input'
import classes from './Auth.module.css'
import {auth} from '../../store/actions/auth'

function validateLogin(email) {
  const re = /\S+@\S+\.\S+/mgi;
  return !re.test(String(email).toLowerCase())?/^\w+$/.test(String(email).toLowerCase()):true
}

const initialState = {
  login: {
    value: '',
    type: 'text',
    label: 'Логин',
    valid: false,
    touched: false,
    required: true
  },
  sublogin: {
    value:' ',
    type: '',
    label: 'Сублогин',
    valid: true,
    touched: true,
    required: false
  },
  password: {
    value:'',
    type: 'password',
    label: 'Пароль',
    valid: false,
    touched: false,
    required: true
  }
}

const Auth = ({auth}) => {
  
  const [secondary, setSecondary] = useState(initialState)

  const validateControl = (value, required, type) => {
    if (!required) {
      return true
    }

    let isValid = value !== ''
    
    if (type === 'text') {
      isValid = validateLogin(value) && isValid
    }

    if (type === 'password') {
      isValid =  !!/^[^А-Яа-яЁё]+$/.test(value) && isValid
    }

    return isValid
  }

  const onChangeHandler = (event, inputName) => {
    const currentInput = {...secondary}

    currentInput[inputName].value = event.target.value
    currentInput[inputName].valid = validateControl(currentInput[inputName].value, currentInput[inputName].required, currentInput[inputName].type)

    let isFormValid = true

    Object.keys(secondary).forEach(name => {
      isFormValid = secondary[name].valid && isFormValid
    })

    setSecondary(currentInput)
  }

  const onClickHandler = (event) => {
    event.preventDefault()
    auth(secondary)
    const currentInput = {...secondary}
    currentInput.login.touched = true
    currentInput.password.touched = true
    setSecondary(currentInput)
  }

  const renderInputs = (secondary) => {
    return Object.keys(secondary).map((inputName, index) => {
      const input = secondary[inputName]
      return (
        <Input
          key={input + index}
          value={input.value}
          type={input.type}
          valid={input.valid}
          touched={input.touched}
          label={input.label}
          required={input.required}
          errorMessage={input.errorMessage}
          onChange={event => onChangeHandler(event, inputName)}
        />
      )
    })
  }

  return (
    <div className={ classes.Auth }>
      <img
        src="../../icons/Logo.svg" alt="LOGO"
        className={ classes.Logo }
      />
      
      <div className={ classes.Name } >API-консолька</div>
      {/* {
          isInvalid(props)
            ?<div className={ classes.Auth__Failed }>
              <img src="../../icons/Meh.svg" alt="🙁"/>
              Вход не вышел
              <span>{'{id: "error/auth/failed", explain: "wrong_credentials"}'}</span>
            </div>
            : null
        } */}
      { renderInputs(secondary) }
      <Button
        onClick={ e => onClickHandler(e) }
        type='Mini'
        >Войти
      </Button>
      
      <a
        href="https://github.com/Proleps/Proleps.github.io"
        className={ classes.Github }
        >github.com/Proleps/Proleps.github.io
      </a>
    </div>
  )
}

// const mapStateToProps = state => {
//   return {
//     inputsName: state.auth.inputName
//   }
// }

const mapDispathToProps = {
  auth
}

export default connect( null, mapDispathToProps )(Auth)