import React, { Component } from 'react'
import FontAwesome from 'react-fontawesome'

export default class MakeAGuessListItem extends Component {
  constructor (props) {
    super(props)

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick () {
    this.props.makeAGuess(this.props.specie)
  }

  render () {
    const { specie } = this.props
    return (
      <li>
        <button
          onClick={this.handleClick}
        >{specie.scientificName}</button>
      </li>
    )
  }
}
