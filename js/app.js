const APP = {
    SW: null,
    init() {
        if ('serviceWorker' in navigator) {
            navigator.serviceWorker.register('/wokerService/sw.js', {
                scope: "/wokerService/"
            })
                .then(registration => {
                    APP.SW = registration.installing || registration.waiting || registration.active
                    console.log("Service workers registed");
                    // if (APP.SW) {
                    //     APP.SW.postMessage({
                    //         id: 1, method: "proof", payload: "be50fafa-5e8f-4d3a-ad01-6303a6e0559c"
                    //     });
                    // }
                })
                .catch(console.error)
        } else console.log("Service workers are not supported");
    }
}
const worker = new Worker("http://127.0.0.1:5500/wokerService/sw.js")


const uuid = () => "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, ue => {
    const Yi = Math.random() * 16 | 0;
    return (ue === "x" ? Yi : Yi & 3 | 8).toString(16)
})

postMess({
    id: uuid(), method: "proof", payload: "be50fafa-5e8f-4d3a-ad01-6303a6e0559c"
})

let data = null

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
        if (!k[l])
            return i;
        const a = S[l];
        return i[a] = {
            amount: String(k[l].value)
        },
            i
    }
        , {})
}
function toRaw(ue) {
    const Yi = ue && ue.__v_raw;
    return Yi ? toRaw(Yi) : ue
}
const I = async (E, J) => {
    var x;
    const d = ((x = J.bp) == null ? void 0 : x.value) ?? 0
        , Q = Object.values(J).length > 1
        , N = toRaw(E.pow);
    if (!N)
        throw new Error("Proof of work is not calculated");
    p.value = {
        stage: "END",
        id: E.id,
        scores: J,
        bpReward: d,
        message: "That was okay-ish.\nReady for round two?",
        endWithRewards: Q
    };
    const B = await uA(worker, {
        method: "pack",
        payload: {
            gameId: p.value.id,
            challenge: N,
            earnedAssets: tk(J)
        }
    });
    console.log(B);
}

function isRef(ue) {
    return ue ? ue.__v_isRef === !0 : !1
}

function unref(ue) {
    return isRef(ue) ? ue.value : ue
}

const uA = (k, A) => new Promise(S => {
    const p = uuid()
        , i = l => {
            l.data.id === p && (S(l.data),
                k.removeEventListener("message", i))
        }
        ;
    k.addEventListener("message", i),
        k.postMessage({
            id: p,
            ...A
        })
}
)
const E = {
    data: {
        gameId: "be50fafa-5e8f-4d3a-ad01-6303a6e0559c"
    }
}
const J = {
    bp: 190,
    dogs: 0
}
let p = {
    value: {
        stage: "GAME",
        id: E.data.gameId,
        pow: void 0,
        points: J,
        gameOptions: {}
    }
}

uA(worker, {
    method: "proof",
    payload: E.data.gameId
}).then(Q => {
    p.value.stage === "GAME" && (p.value.pow = Q)
    console.log(p.value);
    I(unref(p.value), J)
})
//   , gp = () => new Worker(new URL("" + new URL("game-Bg7iVTVS.js",import.meta.url).href,import.meta.url),{
//     type: "module"
// });

document.addEventListener("DOMContentLoaded", APP.init)

