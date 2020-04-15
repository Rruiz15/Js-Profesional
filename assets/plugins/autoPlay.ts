import mediaPlayer from "../MediaPlayer"

class autoPlay{

    run(player:mediaPlayer){
       if (!player.media.muted){
           player.media.muted = true
       }
       player.play()
    }
   
}
export default autoPlay
