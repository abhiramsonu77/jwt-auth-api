const itemRoute = require('./items')

module.exports = (app) => {
  app.use('/items', itemRoute);
}