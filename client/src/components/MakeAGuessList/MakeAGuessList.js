import React from 'react'
import shortid from 'shortid'
import MakeAGuessListItem from './MakeAGuessListItem'
import './makeAGuessList.css'

export default ({ species, removeSpecie, makeAGuess, lastGuess, roundHasAnyGuess }) => {
  return (
    <ul className='make-a-guess-list'>
      {!species.length && <li>
        No species in your list, add at least one.
      </li>}
      {makeAGuess && species.map(specie => (
        <MakeAGuessListItem
          key={shortid.generate()}
          specie={specie}
          makeAGuess={makeAGuess}
          lastGuess={lastGuess}
          roundHasAnyGuess={roundHasAnyGuess}
        />
      ))}
    </ul>

  )
}
