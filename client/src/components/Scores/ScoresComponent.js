import React from 'react'
import { injectIntl, FormattedMessage } from 'react-intl'
import './scores.css'

export default injectIntl(({ scores }) => {
  return (<div className='scoreboard'>
    <table>
      <caption className='h3'>
        <FormattedMessage
          id='scores.title'
          defaultMessage='Your scores'
        />
      </caption>
      <thead>
        <tr>
          <th scope='col'>
            <FormattedMessage
              id='scores.correct'
              defaultMessage='correct'
            />
          </th>
          <th scope='col'>
            <FormattedMessage
              id='scores.incorrect'
              defaultMessage='incorrect'
            />
          </th>
          <th scope='col'>
            <FormattedMessage
              id='scores.rounds'
              defaultMessage='rounds'
            />
          </th>
        </tr>
      </thead>
      <tbody>

        <tr>
          <td>{scores.correctGuesses}</td>
          <td>{scores.incorrectGuesses}</td>
          <td>{scores.rounds}</td>
        </tr>
      </tbody>
    </table>
  </div>)
})
