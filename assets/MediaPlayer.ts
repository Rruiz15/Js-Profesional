      class mediaPlayer{
        media:HTMLMediaElement
        plugins:Array<any>
        constructor(config){
          this.media= config.el
          this.plugins= config.plugins || []
          this.initPlugins()
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
         private initPlugins(){
          const player= {
            play: () => this.play(),
            pause: () => this .pause(),
            media:this.media,
            get muted() {
              return this.media.muted
            },
            set muted(value){
              this.media.muted = value
            }
          }
          player.muted
          this.plugins.forEach(plugin => {
            plugin.run(this)
          });
        }
        
      }
    export default mediaPlayer;