import React, { Component } from 'react'
import { connect } from 'react-redux'
import { injectIntl, FormattedMessage } from 'react-intl'
import './normalize.css'
import './app.css'
import Header from '../Header/Header'

import SoundContainer from '../Sound/SoundContainer'
import SetupContainer from '../Setup/SetupContainer'
import { appSelectors, appCreators } from './duck'

class App extends Component {
  render () {
    const { showSetup, playRecording, reset } = this.props

    return (
      <div className='app'>
        <Header lvl='h1'>
          <FormattedMessage
            id='app.title'
            defaultMessage='Robo-robin'
          />
        </Header>
        <p>
          <FormattedMessage
            id='app.content1'
            defaultMessage='Robo-robin knows all bird songs and can help you to learn them!'
          />
        </p>
        <ol className={'instructions'}>
          <li>
            <FormattedMessage
              id='app.content2'
              defaultMessage='First make a list of species. Add to the list by searching any species (or group of species) available from {link}. Both english and scientific names works.'
              values={{ link: <a href='https://xeno-canto.org'
                target='_blank'
                rel='noopener noreferrer'>Xeno-canto.org</a> }}
            />
          </li>
          <li>
            <FormattedMessage
              id='app.content3'
              defaultMessage='Robo-robin then plays a random recording of any of the species from your list.'
            />
          </li>
          <li>
            <FormattedMessage
              id='app.content4'
              defaultMessage='Listen and make a guess which of the species was in the recording.'
            />
          </li>
        </ol>
        <main>
          {showSetup && <SetupContainer />}
          {playRecording && <SoundContainer />}
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
)(injectIntl(App))
