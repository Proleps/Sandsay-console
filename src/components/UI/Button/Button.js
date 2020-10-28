import React from 'react'
import classes from './Button.module.css'

export const Button = props => (
  <button
    onClick={props.onClick}
    className={ [ classes.Button, classes[props.type]].join(' ') }
    >{props.children}
  </button>
)