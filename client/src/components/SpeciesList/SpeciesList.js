import React from 'react'
import shortid from 'shortid'
import SpecieListItem from './SpecieListItem'
import MakeAGuessListItem from './MakeAGuessListItem'

export default ({ species, removeSpecie, makeAGuess }) => {
  return (
    <ul>
      {!species.length && <li>
        No species in your list, add at least one.
      </li>}
      {makeAGuess && species.map(specie => (
        <MakeAGuessListItem
          key={shortid.generate()}
          specie={specie}
          makeAGuess={makeAGuess}
        />
      ))}

      {removeSpecie && species.map(specie => (
        <SpecieListItem
          key={shortid.generate()}
          specie={specie}
          removeSpecie={removeSpecie}
        />
      ))}
    </ul>

  )
}
