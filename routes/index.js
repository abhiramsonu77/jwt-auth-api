const itemRoute = require('./items')
const authRoute = require("./auth")

module.exports = (app) => {
  app.use('/items', itemRoute);
  app.use("/auth", authRoute);
}