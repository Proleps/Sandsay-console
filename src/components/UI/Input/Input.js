import React from 'react'
import classes from './Input.module.css'

function isInvalid({valid, touched, required }) {
  return !valid && required && touched
}

const Input = props => {
  const inputType = props.type || 'text'
  const cls = [classes.Input]
  const htmlFor = `${inputType}-${Math.random()}`

  if (isInvalid(props)) {
    cls.push(classes.invalid)
  }

  return (
    <div className={cls.join(' ')}>
        <label htmlFor={htmlFor}>
          {props.label}
          {props.label==="Сублогин"?<span>Опционально</span>:null}
        </label>
        <input
          type={inputType}
          id={htmlFor}
          value={props.value}
          onChange={props.onChange}
        />
    </div>
  )
}

export default Input