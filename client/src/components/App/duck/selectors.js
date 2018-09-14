const getApp = state => state.app

const getShowSetup = state => getApp(state).showSetup

const getPlayRecording = state => getApp(state).playRecording

export default {
  getApp,
  getShowSetup,
  getPlayRecording
}
