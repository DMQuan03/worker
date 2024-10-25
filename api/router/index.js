const payLoad = require("./payload")
const Router = (app) => {
    app.use("/api/blum", payLoad)
}

module.exports = Router