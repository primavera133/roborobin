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
    const { specie, lastGuess, roundHasAnyGuess, locale } = this.props
    const hasResult = roundHasAnyGuess && lastGuess && lastGuess.specie.sc === specie.sc
    const result = hasResult && lastGuess.result
    const isCorrect = hasResult && result === GUESS_STATES.CORRECT
    const isIncorrect = hasResult && result === GUESS_STATES.INCORRECT
    const lastRoundHasSuccess = roundHasAnyGuess && lastGuess && lastGuess.result === GUESS_STATES.CORRECT

    return (
      <li
        className='guess-item'
      >
        <button
          disabled={lastRoundHasSuccess}
          onClick={this.handleClick}
          className={`${isCorrect ? 'btn-success' : ''} ${isIncorrect ? 'btn-wrong' : ''}`}
        >
          <span className='btn-text'>{specie[locale]}</span>
          {isIncorrect && (<span className='btn-icon btn-icon--incorrect'><FontAwesome name='thumbs-down' /></span>)}
          {isCorrect && (<span className='btn-icon btn-icon--correct'><FontAwesome name='thumbs-up' /></span>)}
        </button>
      </li>
    )
  }
}
