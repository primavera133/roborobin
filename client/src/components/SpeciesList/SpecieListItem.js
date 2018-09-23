import React, { Component } from 'react'
import FontAwesome from 'react-fontawesome'

export default class SpecieItem extends Component {
  constructor (props) {
    super(props)

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick () {
    this.props.removeSpecie(this.props.specie)
  }

  render () {
    const { specie } = this.props
    return (
      <li>
        <button onClick={this.handleClick} className='btn-list-remove' title='Remove this specie from list'>
          <span className='sr-only'>Remove this specie from list</span>
          <FontAwesome name='times-circle' />
        </button>
        {specie.scientificName}
      </li>
    )
  }
}
