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
        {specie.scientificName}
        <a onClick={this.handleClick}>
          <span className='skel-sr-only'>Remove this specie from list</span>
          <FontAwesome name='minus-circle' title='Remove this specie from list' />
        </a>
      </li>
    )
  }
}
