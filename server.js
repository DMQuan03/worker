const express = require("express")
const app = express()
const cors = require("cors")
const init_router = require("./api/router/index")
require("dotenv").config()
const PORT = 5678
app.use(cors())
app.use(express.json())
init_router(app)
app.listen(PORT, () => {
    console.log(`server is running ${PORT}`)
})