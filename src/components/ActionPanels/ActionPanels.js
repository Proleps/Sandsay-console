import React from 'react'
import classes from './ActionPanels.module.css'
import { Button } from '../../components/UI/Button/Button'
import { connect } from 'react-redux'
import { historyPush } from '../../store/actions/history'
import { requestFormat } from '../../store/actions/requestField'
import {FormatIcon} from '../../icons/iconca'


const ActionPanels = ({value, historyPush, requestFormat}) => {
  return (
  <div className={ classes.ActionPanels }>
        <Button
          onClick={ () => historyPush(value) }
          >Отправить
        </Button>
        <a href="https://github.com/Proleps/Proleps.github.io">github.com/Proleps/Proleps.github.io</a>
        <button
          className={ classes.Format }
          onClick={ () => requestFormat(value) }
          >
            {FormatIcon}
            Форматировать
        </button>
      </div>
)}

const mapDispatchToProps = {
  historyPush, requestFormat
}

const mapStateToProps = state => {
  return {
    value: state.requestField.value
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ActionPanels)