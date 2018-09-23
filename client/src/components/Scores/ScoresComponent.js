import React from 'react'
import './scores.css'

export default ({ scores }) => {
  return (<div className='scoreboard'>
    <h3 className='h3'>Your scores</h3>
    <table>
      <thead>

        <tr>
          <th>correct</th>
          <th>incorrect</th>
          <th>rounds</th>
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
