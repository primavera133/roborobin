import React, { Component } from 'react'
import { connect } from 'react-redux'
import './app.css'
import 'react-select/dist/react-select.css'

import SoundContainer from '../Sound/SoundContainer'
import SetupContainer from '../Setup/SetupContainer'
import { appSelectors } from './duck'

class App extends Component {
  render () {
    const { showSetup, playRecording } = this.props
    return (
      <div className='App container'>
        <div className='row'>
          <div className='column'>
            <h1>Practice your skills</h1>
            <ol>
              <li>First make a list of species.</li>
              <li>Then play a random recording of any of the species from your list.</li>
              <li>Guess which of the species was in the recording.</li>
            </ol>
          </div>
        </div>
        {showSetup && <SetupContainer />}
        {playRecording && <SoundContainer />}
      </div>
    )
  }
}

const mapStateToProps = state => {
  const showSetup = appSelectors.getShowSetup(state)
  const playRecording = appSelectors.getPlayRecording(state)

  return {
    showSetup,
    playRecording
  }
}

export default connect(
  mapStateToProps)(App)
