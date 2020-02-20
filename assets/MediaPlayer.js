      class mediaPlayer{
        constructor(config){
          this.media= config.el
          this.plugins= config.plugins || []
          this._initPlugins()
        }
        play(){
          this.media.play()
        }
        pause(){
          this.media.pause()
        }
        playorpause(){
          if(this.media.paused){
            this.play()
          } else {
            this.pause() 
          }
        }
        mute(){
          this.media.muted = true
        }
        unmute(){
          this.media.muted = false
        }
        tooglemute(){
          if(this.media.muted){  
            this.unmute()
          } else{
            this.mute()
          }
        }



        _initPlugins(){
          this.plugins.forEach(plugin => {
            plugin.run(this)
          });
        }
        
      }
    export default mediaPlayer;