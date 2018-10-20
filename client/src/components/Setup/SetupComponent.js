import React, { Component, Fragment } from 'react'
import { injectIntl, defineMessages, FormattedMessage } from 'react-intl'
import FontAwesome from 'react-fontawesome'
import SpeciesList from '../SpeciesList/SpeciesList'
import Header from '../Header/Header'
import './setup.css'

const messages = defineMessages({
  search: {
    id: 'setup.search'
  }
})

class SetupComponent extends Component {
  constructor (props) {
    super(props)

    this.inputRef = React.createRef()

    this.handleAddSpecie = this.handleAddSpecie.bind(this)
    this.handleKeyUp = this.handleKeyUp.bind(this)
    this.handleOnChange = this.handleOnChange.bind(this)
  }

  handleOnChange (e) {
    this.props.setAddSpeciesInputValue(e.target.value)
  }

  handleKeyUp (e) {
    if (e.key === 'Enter') {
      this.handleAddSpecie()
    }
  }

  handleAddSpecie () {
    if (!this.props.validatingSpecies && this.inputRef.current.value) {
      this.props.addSpecie()
    }
  }

  render () {
    const {
      addSpeciesValue,
      species,
      removeSpecie,
      validatingSpecies,
      validationFailed,
      validating,
      lastValidated,
      playRecording,
      intl: { formatMessage }
    } = this.props

    return (
      <Fragment>
        {!!species.length && (<Header lvl='h2'>
          <FormattedMessage
            id='setup.title'
            defaultMessage='This is your current list'
          />
        </Header>)}

        {!species.length && <Header lvl='h2'>
          <FormattedMessage
            id='setup.noSpeciesMessage'
            defaultMessage='No species in your list, add at least one. two'
          />
        </Header>}

        <SpeciesList species={species} removeSpecie={removeSpecie} />

        <div className='setup-add'>
          <label
            htmlFor='addSpecie'
            className='h3'>
            <FormattedMessage
              id='setup.add'
              defaultMessage='Add a bird'
            />
          </label>
          <input
            type='text'
            id='addSpecie'
            name='addSpecie'
            maxLength='100'
            placeholder='name of bird'
            value={addSpeciesValue}
            disabled={validatingSpecies}
            onChange={this.handleOnChange}
            onKeyUp={this.handleKeyUp}
            ref={this.inputRef}
            aria-invalid={validationFailed}
          />
          <button
            onClick={this.handleAddSpecie}
            disabled={validatingSpecies}
            title='Search and add to the list'
            className='btn-add'
          >
            <span className='sr-only'>
              <FormattedMessage
                id='setup.search'
                defaultMessage='Search and add to the list'
              />
            </span>
            <FontAwesome name='plus-circle' title={formatMessage(messages.search)} spin={validatingSpecies} />
          </button>
          {validatingSpecies && <p className='setup-message' aria-live='polite'>
            <FontAwesome name='search' />
            <span className='text-icon'><FormattedMessage
              id='setup.looking'
              defaultMessage={`Looking for recordings of {validating}`}
              values={{ validating: <i>{validating}</i> }}
            /></span>
          </p>}
          {validationFailed && <p className='setup-message' aria-live='assertive'>
            <FontAwesome name='exclamation-triangle' />
            <span className='text-icon' role='alert'>
              <FormattedMessage
                id='setup.noHit'
                defaultMessage='No recordings for {lastValidated}, try something else'
                values={{ lastValidated: <i>{lastValidated}</i> }}
              />
            </span>
          </p>}
        </div>

        <div className='setup-play'>
          <Header lvl='h3'>
            <FormattedMessage
              id='setup.playTitle'
              defaultMessage='Ready?'
            />
          </Header>
          <button
            onClick={playRecording}
            disabled={!species.length}
          >
            <span className='btn-text'>
              <FormattedMessage
                id='setup.playBtn'
                defaultMessage='Start playing!'
              />
            </span>
            <FontAwesome name='volume-up' />
          </button>
        </div>
      </Fragment>
    )
  }
}

export default injectIntl(SetupComponent)
