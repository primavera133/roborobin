import React, { Component } from 'react'
import { connect } from 'react-redux'
import ScoresComponent from './ScoresComponent'
import { scoresSelectors } from './duck'

class ScoresContainer extends Component {
  render () {
    return (<ScoresComponent {...this.props} />)
  }
}

const mapStateToProps = state => {
  const scores = scoresSelectors.getScores(state)
  return {
    scores
  }
}

const mapDispatchToProps = dispatch => {
  return {
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ScoresContainer)
