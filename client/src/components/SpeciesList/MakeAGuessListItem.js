import React, { Component } from 'react'
import FontAwesome from 'react-fontawesome'
import { GUESS_STATES } from '../App/duck/reducers'

export default class MakeAGuessListItem extends Component {
  constructor (props) {
    super(props)

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick () {
    this.props.makeAGuess(this.props.specie)
  }

  render () {
    const { specie, lastGuess, roundHasAnyGuess } = this.props
    const hasResult = roundHasAnyGuess && lastGuess && lastGuess.specie.scientificName === specie.scientificName
    const result = hasResult && lastGuess.result
    const isCorrect = hasResult && result === GUESS_STATES.CORRECT
    const isIncorrect = hasResult && result === GUESS_STATES.INCORRECT
    const lastRoundHasSuccess = roundHasAnyGuess && lastGuess && lastGuess.result === GUESS_STATES.CORRECT

    return (
      <li>
        <button
          disabled={lastRoundHasSuccess}
          onClick={this.handleClick}
        >
          { isIncorrect && (<FontAwesome name='thumbs-down' />)}
          { isCorrect && (<FontAwesome name='thumbs-up' />)}
          {specie.scientificName}
        </button>
      </li>
    )
  }
}
