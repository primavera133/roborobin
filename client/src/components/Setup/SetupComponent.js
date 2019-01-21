import React, { Component, Fragment } from 'react'
import { injectIntl, defineMessages, FormattedMessage } from 'react-intl'
import FontAwesome from 'react-fontawesome'
import SpeciesList from '../SpeciesList/SpeciesList'
import './setup.css'

const messages = defineMessages({
  search: {
    id: 'setup.search'
  },
  searchPlaceholder: {
    id: 'setup.searchPlaceholder'
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
      intl: { formatMessage, locale }
    } = this.props

    return (
      <Fragment>
        <div className='setup-add'>
          <label
            htmlFor='addSpecie'
            className='h3'>
            {!species.length && <FormattedMessage
              id='setup.add0'
              defaultMessage='Which specie do you want to start your list with?'
            />}
            {!!species.length && <FormattedMessage
              id='setup.add1'
              defaultMessage='Do you want to add any more?'
            />}
          </label>
          <div className='setup-flex'>
            <input
              type='text'
              id='addSpecie'
              name='addSpecie'
              maxLength='100'
              placeholder={formatMessage(messages.searchPlaceholder)}
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
              className='btn-small'
            >
              <FormattedMessage
                id='setup.search'
                defaultMessage='Search and add to the list'
              />
            </button>
          </div>

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

        <SpeciesList species={species} removeSpecie={removeSpecie} playRecording={playRecording} locale={locale} />

      </Fragment>
    )
  }
}

export default injectIntl(SetupComponent)
