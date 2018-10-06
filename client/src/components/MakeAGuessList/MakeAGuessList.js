import React from 'react'
import MakeAGuessListItem from './MakeAGuessListItem'
import './makeAGuessList.css'

export default ({ species, makeAGuess, lastGuess, roundHasAnyGuess }) => {
  return (
    <ul className='make-a-guess-list'>
      {!species.length && <li>
        No species in your list, add at least one.
      </li>}
      {makeAGuess && species.map(specie => (
        <MakeAGuessListItem
          key={specie.scientificName}
          specie={specie}
          makeAGuess={makeAGuess}
          lastGuess={lastGuess}
          roundHasAnyGuess={roundHasAnyGuess}
        />
      ))}
    </ul>

  )
}
