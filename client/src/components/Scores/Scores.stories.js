import React from 'react'
import { storiesOf } from '@storybook/react'
import ScoresComponent from './ScoresComponent'

storiesOf('ScoresComponent', module)
  .add('Scoreboard', () => {
    const testScores = {
      correctGuesses: 1,
      incorrectGuesses: 2,
      rounds: 3
    }

    return (<ScoresComponent scores={testScores} />)
  })
