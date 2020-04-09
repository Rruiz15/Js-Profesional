import mediaPlayer from "./MediaPlayer.js";
import autoPlay from "./plugins/autoPlay.js";
import autoPause from "./plugins/autoPause.js";


const video = document.querySelector("video")
const button = document.getElementById("btn_play")
const button2 = document.getElementById("btn_mute")

const player = new mediaPlayer({
    el:video, 
    plugins: [
        new autoPlay(),
        new autoPause()
    ]
})
button.onclick = () => player.playorpause()
button2.onclick = () => player.tooglemute()
