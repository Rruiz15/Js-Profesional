import mediaPlayer from "./MediaPlayer";
import autoPlay from "./plugins/autoPlay";
import autoPause from "./plugins/autoPause";
import Ads from "./plugins/ads";


const video = document.querySelector("video")
const playButton:HTMLElement = document.getElementById("btn_play")
playButton.onclick = () => player.playorpause()
const muteButton:HTMLElement = document.getElementById("btn_mute")
muteButton.onclick = () => player.tooglemute()
const player = new mediaPlayer({
    el:video, 
    plugins: [
        new autoPlay(),
        new autoPause(),
        new Ads()
    ]
})


if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register('/sw.js').catch(error =>{
        console.log(error.message)
    })
}