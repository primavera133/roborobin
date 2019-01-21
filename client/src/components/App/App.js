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
    const { showSetup, playRecording, reset, showReadMore, toggleShowReadMore } = this.props

    return (
      <div className='app'>
        <Header lvl='h1'>
          <FormattedMessage
            id='app.title'
            defaultMessage='Robo-robin'
          />
        </Header>
        <span className='app-subtitle'>
          <FormattedMessage
            id='app.subtitle'
            defaultMessage='all them bird songs'
          />
        </span>

        <main>
          {showSetup && <SetupContainer />}
          {playRecording && <SoundContainer />}
        </main>
        <footer>
          <hr />

          {showReadMore && <ol className={'instructions'}>
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
          </ol> }

          <div className='footer'>
            <button onClick={toggleShowReadMore} className='btn-small'>
              {!showReadMore && <FormattedMessage
                id='app.readMore'
                defaultMessage='Read more'
              />}
              {showReadMore && <FormattedMessage
                id='app.readLess'
                defaultMessage='Hide'
              />}
            </button>

            <button onClick={reset} className='btn-small'>
              <FormattedMessage
                id='setup.restart'
                defaultMessage='Restart app'
              />
            </button>
          </div>

        </footer>
      </div>
    )
  }
}

const mapStateToProps = state => {
  const showReadMore = appSelectors.getShowReadMore(state)
  const showSetup = appSelectors.getShowSetup(state)
  const playRecording = appSelectors.getPlayRecording(state)

  return {
    showReadMore,
    showSetup,
    playRecording
  }
}

const mapDispatchToProps = dispatch => {
  const toggleShowReadMore = () => dispatch(appCreators.toggleShowReadMore())
  const reset = () => dispatch(appCreators.resetApp())

  return {
    toggleShowReadMore,
    reset
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(injectIntl(App))
