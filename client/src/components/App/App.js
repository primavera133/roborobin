import React, { Component } from 'react'
import { connect } from 'react-redux'
import './normalize.css'
import './style.css'
import './app.css'

import SoundContainer from '../Sound/SoundContainer'
import SetupContainer from '../Setup/SetupContainer'
import { appSelectors, appCreators } from './duck'

class App extends Component {
  render () {
    const {showSetup, playRecording, reset} = this.props
    return (
      <div className='app'>
        <h1 className='h1'>Robo-robin</h1>
        <p>Robo-robin knows all bird songs and can help you to learn them!</p>
        <ol className={'instructions'}>
          <li>First make a list of species. Search any species available from <a href='https://xeno-canto.org'
            target='_blank'
            rel='noopener noreferrer'>Xeno-canto</a>.
            English
            names or scientific works.
          </li>
          <li>Then play a random recording of any of the species from your list.</li>
          <li>Guess which of the species was in the recording.</li>
        </ol>
        <main>
          {showSetup && <SetupContainer/>}
          {playRecording && <SoundContainer/>}
        </main>
        <footer>
          <button onClick={reset}>Restart app</button>
        </footer>
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

const mapDispatchToProps = dispatch => {
  const reset = () => dispatch(appCreators.resetApp())

  return {
    reset
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
