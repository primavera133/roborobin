import React, { Component, Fragment } from 'react'
import FontAwesome from 'react-fontawesome'
import SpeciesList from '../SpeciesList/SpeciesList'
import './setup.css'

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
      playRecording
    } = this.props
    return (
      <Fragment>
        {!!species.length && (<h2 className='h2'>This is your current list</h2>)}

        {!species.length && <h2>
          No species in your list, add at least one.
        </h2>}

        <SpeciesList species={species} removeSpecie={removeSpecie} />

        <div className='setup-add'>
          <label
            htmlFor='addSpecie'
            className='h3'>Add a bird</label>
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
            <span className='sr-only'>Search and add to the list</span>
            <FontAwesome name='plus-circle' title='Search and add to the list' spin={validatingSpecies} />
          </button>
          {validatingSpecies && <p className='setup-message' aria-live='polite'>
            <FontAwesome name='search' />
            <span className='text-icon'>Looking for recordings of {validating}</span>
          </p>}
          {validationFailed && <p className='setup-message' aria-live='assertive'>
            <FontAwesome name='exclamation-triangle' />
            <span className='text-icon' role='alert'>No recordings for {lastValidated}, try something else</span>
          </p>}
        </div>

        <div className='setup-play'>
          <h3 className='h3'>Ready?</h3>
          <button
            onClick={playRecording}
            disabled={!species.length}
          >
            <span className='btn-text'>Start playing!</span>
            <FontAwesome name='volume-up' />
          </button>
        </div>
      </Fragment>
    )
  }
}

export default SetupComponent
