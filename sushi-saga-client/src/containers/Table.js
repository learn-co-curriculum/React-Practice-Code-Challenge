import React, { Fragment } from 'react'
import Form from '../components/Form'

const Table = (props) => {

  const renderPlates = (array) => {
    return array.map((x, index) => {
      return <div className="empty-plate" style={{ top: -7 * index }}/>
    })
  }

  const addMoneyButtonListener = () => {
    props.addMoneyButtonHandler()
  }

  const openForm = () => {
    if(props.addMoneyClicked === true) {
      return <Form formHandler={props.formHandler}/>
    }
  }

  return (
    <Fragment>
      <h1 className="remaining">
        You have: ${props.wallet} remaining!
      </h1>
      <button onClick={addMoneyButtonListener}>Add Money</button>
      {openForm()}
      <div className="table">
        <div className="stack">
          {
            /*
               renderPlates takes an array
               and renders an empty plate
               for every element in the array
            */
            renderPlates(props.eatenSushi)
          }
        </div>
      </div>
    </Fragment>
  )
}

export default Table
