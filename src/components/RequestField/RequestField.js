import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { requestField } from '../../store/actions/requestField'
import classes from './RequestField.module.css'

let dragForce = +localStorage.getItem('dragForce')*parseFloat(getComputedStyle(document.documentElement).width) || 0

// window.addEventListener(`resize`, event => {
//   // some code
// }, false);

function dragHandler() {
  function moveThis(event) {
    event.preventDefault()
    // console.log(document.documentElement.clientWidth);
    const requestArea = document.getElementById('111'),
      responseArea = document.getElementById('222')
    dragForce+=event.movementX
    requestArea.style.width = `calc(50vw - 20px + ${dragForce}px)`
    responseArea.style.width = `calc(50vw - 20px - ${dragForce}px)`
  }
  
  const removeThis = function() {
    // textareaWidth
    localStorage.setItem('dragForce', +dragForce/parseFloat(getComputedStyle(document.documentElement).width))
    document.removeEventListener('mousemove', moveThis)
    document.removeEventListener('mouseup', removeThis)
  }
  document.addEventListener('mousemove', moveThis)
  document.addEventListener('mouseup', removeThis)
}

const RequestField = ({value, isValid, requestField}) => {
  
  const [width, setWidth] = useState(parseFloat(getComputedStyle(document.documentElement).width))
  useEffect( () => {
    function widthObs() {
      setWidth(parseFloat(getComputedStyle(document.documentElement).width))
    }
    window.addEventListener('resize', widthObs);
    dragForce = +localStorage.getItem('dragForce')*parseFloat(getComputedStyle(document.documentElement).width)
    const requestArea = document.getElementById('111'),
    responseArea = document.getElementById('222')
    requestArea.style.width = `calc(50vw - 20px + ${dragForce}px)`
    responseArea.style.width = `calc(50vw - 20px - ${dragForce}px)`
    return () => window.removeEventListener('resize', widthObs);
  }, [width])
  
  const cls = [classes.Request]
  !isValid && cls.push(classes.Invalid)

  return (
    <div className={ classes._ }>
      <div className={cls.join(' ')} id='111' >
        Запрос:
        <textarea
          value={value}
          onChange={event => requestField(event.target.value)}
          className={ classes.TextArea }
        />
      </div>

      <div
        className={ classes.DragElement }
        onMouseDown={ dragHandler }
        id='777'
        ><img src="../../icons/Frame 26.svg" alt="Logout"/>
      </div>
      
      <div className={classes.Response} id='222'>
        Ответ:
        <textarea
          defaultValue={value}
          className={ classes.TextArea }
        />
      </div>
    </div>
  )
}

const mapStateToProps = state => ({
    value: state.requestField.value,
    isValid: state.requestField.isValid
  })
  
const mapDispatchToProps = {
  requestField
}

export default connect(mapStateToProps, mapDispatchToProps)(RequestField)