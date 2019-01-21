const getApp = state => state.app

const getShowReadMore = state => getApp(state).showReadMore
const getShowSetup = state => getApp(state).showSetup

const getPlayRecording = state => getApp(state).playRecording

export default {
  getApp,
  getShowReadMore,
  getShowSetup,
  getPlayRecording
}
