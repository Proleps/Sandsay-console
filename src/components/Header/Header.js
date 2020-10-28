import React, {useState} from 'react'
import { connect } from 'react-redux'
import classes from './Header.module.css'
import {logout} from '../../store/actions/auth'
import {onFullScreenIcon, offFullScreenIcon} from '../../icons/iconca'


const Header = ({login, sublogin, logout}) => {
  const [ fullScreenIcon, setfullScreenIcon ] = useState(onFullScreenIcon)
  const onFullScreenHandler = () => {
    if(document.fullscreenElement) {
      document.exitFullscreen()
      setfullScreenIcon(onFullScreenIcon)
    } else {
      document.documentElement.requestFullscreen()
      setfullScreenIcon(offFullScreenIcon)
      }
  }

  return (
    <div className={ classes.Header }>
      <div className={ classes.LogoBlock } >
        <img src="../../icons/Logo.svg" alt="LOGO"/>
        <div className={ classes.Name } >API-консолька</div>
      </div>
  
      <div className={ classes.Right } >
        <div className={ classes.User  } >
          <div className={ classes["User-info"] } >
            {login}
          </div>
          :
          <div className={ classes["User-info"] } >
            {sublogin}
          </div>
        </div>
  
        <div
          className={ classes.Logout }
          onClick={logout}
          >Выйти
          <img src="../../icons/Logout.svg" alt="Logout"/>
        </div>
        <div onClick={onFullScreenHandler} className={ classes.Fullscreen } >
          {fullScreenIcon}
        </div>
      </div>
      
    </div>
  )
}

const mapStateToProps = state => {
  return {
    login: state.auth.inputsName.login,
    sublogin: state.auth.inputsName.sublogin
  }
}

const mapDispathToProps = {
  logout
}

export default connect( mapStateToProps, mapDispathToProps )(Header)