import React, { Component } from 'react'

export default class Form extends Component {

  formListener = (event) => {
    event.preventDefault()
    this.props.formHandler(event.target.amount.value)
  }

  render() {
    return(
      <form onSubmit={this.formListener} >
        Amount to add:<br />
        <input type="number" name="amount" />
        <br />
        <input type="submit" value="Submit" />
      </form>
    )
  }
}
