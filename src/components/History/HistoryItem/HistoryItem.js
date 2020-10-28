import React, { useState, useEffect, useRef } from 'react'
import { connect } from 'react-redux'
import { Dropdown } from './Dropdown/Dropdown'
import classes from './HistoryItem.module.css'
import {requestFormat} from '../../../store/actions/requestField'
import {deleteItem} from '../../../store/actions/history'


const HistoryItem = ( {item, requestFormat, deleteItem} ) => {
  const [clicked, setClicked] = useState(false)
  const [copyDone, setCopyDone] = useState(false)
  const flag = useRef()
  useEffect(()=> {
    flag.current = true
    return () => flag.current = false
  })

  const CopyDoneHandler = (e) => {
    setCopyDone(
      <div className={ classes.Copy__Done }>
        Скопировано
      </div>
    )
    setTimeout(() => {
      setCopyDone(false)
    }, 2000)
  }
  
  const deleteItemHandler = (e) => {
    deleteItem(item.index)
  }

  const copyItemHandler = async () => {
    await navigator.clipboard.writeText(JSON.stringify(item.value))
  }

  function dropDownCloseHandler() {
    flag.current && setClicked(false)
    document.removeEventListener('click', dropDownCloseHandler)
  }

  function dropDownHandler(e) {
    e.stopPropagation()
    !clicked && document.addEventListener('click', dropDownCloseHandler)
    setClicked(true)
  }

  let routes = clicked &&
    (
      <Dropdown
        deleteItem={ (e) => deleteItemHandler(e)}
        copyItem={ (e) => {copyItemHandler(); CopyDoneHandler(e)} }
      />
    )

  return (
    <div
      className={ classes._ }
      onClick={() => requestFormat(JSON.stringify(item.value))}
    >
      <div className={ classes.ItemStatus__Green } />

      <div>
        {item.value.action}
      </div>

      <div
        className={ classes.Dropdown }
        onClick={ (e) => dropDownHandler(e)}
        ><img src="../../../icons/Frame 26.svg" alt="Logout" draggable="false" />
      </div>

      {routes}
      <div className={ classes.Copy } >
        {copyDone}
      </div>
    </div>
  )
}

const mapDispatchToProps = {
  requestFormat, deleteItem
}

export default connect(null, mapDispatchToProps)(HistoryItem)