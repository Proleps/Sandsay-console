import React from 'react'
import classes from './Dropdown.module.css'

export const Dropdown = ( {deleteItem, copyItem} ) => {

  return (
    <div
      className={ classes._ }
      onClick={(e)=>e.stopPropagation()}
    >
      <div className={ classes.GoodBtn } >
        Выполнить
      </div>

      <div
        className={ classes.GoodBtn }
        onClick={ copyItem }
        >Скопировать
      </div>
      
      <hr/>

      <div
        className={ classes.DeleteBtn }
        onClick={ deleteItem }
        >Удалить
      </div>
    </div>
  )
}