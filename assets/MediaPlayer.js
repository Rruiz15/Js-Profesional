      class mediaPlayer{
        constructor(config){
          this.media= config.el
        }
        playorpause(){
          if(this.media.paused){
            this.media.play()
          } else {
            this.media.pause()
          }
        }
        
      }
    export default mediaplayer;