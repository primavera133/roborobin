import React from 'react'
import './scores.css'

export default ({ scores }) => {
  return (<div className='scoreboard'>
    <table>
      <caption className='h3'>Your scores</caption>
      <thead>
        <tr>
          <th scope='col'>correct</th>
          <th scope='col'>incorrect</th>
          <th scope='col'>rounds</th>
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
}
