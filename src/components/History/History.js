import React from 'react'
import { connect } from 'react-redux'
import classes from './History.module.css'
import HistoryItem from './HistoryItem/HistoryItem'
import {historyClear} from '../../store/actions/history'
import {requestField} from '../../store/actions/requestField'


function mouseWheelHandler(e) {
  const HistoryItemsNode = document.getElementById("HistoryItemsNode")
  if((parseFloat(getComputedStyle(HistoryItemsNode).left) < 0 && e.deltaY > 0) || (e.deltaY < 0 && parseFloat(getComputedStyle(document.documentElement).width)-e.currentTarget.scrollWidth-65 < parseFloat(getComputedStyle(HistoryItemsNode).left)))
  HistoryItemsNode.style.left=`${ parseFloat(getComputedStyle(HistoryItemsNode).left) + 0.5*e.deltaY }px`
}
  
function historyListCreator(historyArray) {
  return historyArray.map( (value, index) => <HistoryItem key={index+JSON.stringify(value)} item={{value, index}}/>).reverse()
}

const History = ({history, historyClear}) => {
  
  return (
    <div className={ classes._ } >
      <div
        className={ classes.HistoryItems }
        onWheel={mouseWheelHandler}
        id="HistoryItemsNode"
        >{historyListCreator(history)}
      </div>

      <div className={ classes.Overlay} />

      <button
        onClick={() => historyClear()}
        className={classes.ClearHistory}
        ><img src="../../icons/MarkX.svg" alt="Clear"/>
      </button>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    history: state.history.history
  }
}

const mapDispatchToProps = {
  historyClear, requestField
}

export default connect(mapStateToProps, mapDispatchToProps)(History)