const { Worker } = require("worker_threads")
const worker = new Worker("../../sw.js")
const uuid = require("../helper/uuid")


var GAME_ASSETS_TYPE = (ue => (ue.CLOVER = "CLOVER",
    ue.FREEZE = "FREEZE",
    ue.BOMB = "BOMB",
    ue.DOGS = "DOGS",
    ue))(GAME_ASSETS_TYPE || {});
class GameAssetPropertiesBase {
    constructor() {
        Io(this, "probability")
    }
}
const tk = k => {
    const A = Object.keys(k)
        , S = {
            bp: GAME_ASSETS_TYPE.CLOVER,
            dogs: GAME_ASSETS_TYPE.DOGS
        };
    return A.reduce((i, l) => {
        if (!k[l]) {
            return i;
        }
        const a = S[l];
        return i[a] = {
            amount: String(k[l])
        },
            i
    }
        , {})
}
function toRaw(ue) {
    const Yi = ue && ue.__v_raw;
    return Yi ? toRaw(Yi) : ue
}

const uA = (k, A) => new Promise(S => {
    const p = uuid()
        , i = l => {
            l.id === p && (S(l)),
                k.removeListener("message", i)
        }
        ;
    k.addListener("message", i),
        k.postMessage({
            id: p,
            ...A
        })
}
)

function isRef(ue) {
    return ue ? ue.__v_isRef === !0 : !1
}

function unref(ue) {
    return isRef(ue) ? ue.value : ue
}

const I = async (E, J) => {
    var x;
    const d = ((x = J.bp) == null ? void 0 : x.value) ?? 0
        , Q = Object.values(J).length > 1
        , N = toRaw(E.pow);
    if (!N)
        throw new Error("Proof of work is not calculated");
    let p = {
        value: {

        }
    }
    p.value = await {
        stage: "END",
        id: E.id,
        scores: J,
        bpReward: d,
        message: "That was okay-ish.\nReady for round two?",
        endWithRewards: Q
    };
    const payload = await {
        gameId: p.value.id,
        challenge: N,
        earnedAssets: tk(J)
    }
    const B = await uA(worker, {
        method: "pack",
        payload: payload
    });
    return B.hash
}

async function process(gameId, p, J) {
    try {
        let hash;
        await uA(worker, {
            method: "proof",
            payload: gameId
        }).then(Q => {
            p.value.stage === "GAME" && (p.value.pow = Q)
            hash = I(unref(p.value), J)
        })
        return hash
    } catch (error) {
        console.log(error);
    }
}

module.exports = process