const uuid = require("../helper/uuid")
const ws = require("../service/worker")
const GeneratePayload = {
    createPayload: async (req, res) => {
        try {
            const { gameId, bp, dog } = await req.body
            console.log(req.body);
            let J = await {
                bp: bp,
                dogs: dog
            }
            let p = await {
                value: {
                    stage: "GAME",
                    id: gameId,
                    pow: void 0,
                    points: J,
                    gameOptions: {}
                }
            }
            const hash = await ws(gameId, p, J)
            return res.status(200).json({
                success: true,
                payload: hash
            })
        } catch (error) {
            return res.status(500).json({
                success: false,
                message: "error from server"
            })
        }
    },
}

module.exports = GeneratePayload