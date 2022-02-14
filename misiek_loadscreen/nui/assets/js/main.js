const app = new Vue({
    el: "#app",

    data: {
        progress: 50,
        status: "Waiting for data...",
    }
})

function Continue() {
    sendEvent("continue")
}

if(!window.invokeNative) {
    const lols = [
        "Overclocking the CPU...",
        "Downclocking the CPU...",
        "Overclocking the GPU...",
        "Downclocking the GPU...",
        "Overclocking the memory...",
        "Downclocking the memory...",
        "Upgrading system memory...",
        "Downgrading system memory...",
        "Increasing storage bytes...",
        "Some really extremely overly god-damn sized text to demonstrate memes..."
    ]
    setInterval(() => {
        app.status = lols[Math.floor(Math.random() * lols.length)]
        app.progress = Math.floor(Math.random() * 100)
    }, 1000)
}

window.addEventListener("DOMContentLoaded", () => {
    const data = window.nuiHandoverData

    if(data) {

        app.ping = data.ping

        app.admin = data.admin
        app.dev = data.dev

        app.group = data.group

        app.name = data.name
        app.players = data.players
    }
})