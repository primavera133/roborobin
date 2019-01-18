import React from 'react'
import { injectIntl } from 'react-intl'
import MakeAGuessListItem from './MakeAGuessListItem'
import './makeAGuessList.css'

const MakeAGuess = ({ species, makeAGuess, lastGuess, roundHasAnyGuess }) => {
  return (
    species.length && (<ul className='make-a-guess-list'>
      {makeAGuess && species.map(specie => (
        <MakeAGuessListItem
          key={specie.sc}
          specie={specie}
          makeAGuess={makeAGuess}
          lastGuess={lastGuess}
          roundHasAnyGuess={roundHasAnyGuess}
        />
      ))}
    </ul>)
  )
}

export default injectIntl(MakeAGuess)
