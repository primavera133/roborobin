module.exports = async (req, res) => {
  res.setHeader('Content-Type', 'application/json')
  res.end(JSON.stringify({ all: 'good' }))
}
