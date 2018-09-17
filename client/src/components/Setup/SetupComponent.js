import React, { Component, Fragment } from 'react'
import FontAwesome from 'react-fontawesome'
import SpeciesList from '../SpeciesList/SpeciesList'

class SetupComponent extends Component {
  constructor (props) {
    super(props)

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
    if (!this.props.validatingSpecies) {
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
        <div className='skel-row'>
          <div className='skel-column'>
            <h4>Current specie list</h4>

            <SpeciesList species={species} removeSpecie={removeSpecie} />

            <div>
              <input
                type='text'
                name='addSpecie'
                maxLength='100'
                placeholder='enter specie name'
                value={addSpeciesValue}
                disabled={validatingSpecies}
                onChange={this.handleOnChange}
                onKeyUp={this.handleKeyUp}
              />
              <button
                onClick={this.handleAddSpecie}
                disabled={validatingSpecies}
              >Add specie to list</button>
            </div>
            {validatingSpecies && <p>
              Looking for recordings of {validating}
              <FontAwesome name='spinner' spin />
            </p>}
            {validationFailed && <p>
              <FontAwesome name='exclamation-triangle' />
              No recordings for {lastValidated}, try something else
            </p>}

            <div>
              <button
                onClick={playRecording}
                disabled={!species.length}
              >
                Play sound!
              </button>
            </div>
          </div>
        </div>
      </Fragment>
    )
  }
}

export default SetupComponent
