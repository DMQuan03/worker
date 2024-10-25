const Router2 = require("express").Router()
const ctrl = require("../controller/payload")
Router2.post("/", ctrl.createPayload)

module.exports = Router2
