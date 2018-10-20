import React from 'react'
import { injectIntl, FormattedMessage } from 'react-intl'
import MakeAGuessListItem from './MakeAGuessListItem'
import './makeAGuessList.css'

const MakeAGuess = ({ species, makeAGuess, lastGuess, roundHasAnyGuess }) => {
  return (
    <ul className='make-a-guess-list'>
      {!species.length && <li>
        <FormattedMessage
          id='makeaguess.title'
          defaultMessage='No species in your list, add at least one. two'
        />
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

export default injectIntl(MakeAGuess)
