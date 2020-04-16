class singleton {
    private static instance: singleton
    private constructor(){
        //init
    }
    
    static getInstance(){
        if(!singleton.instance){
            singleton.instance = new singleton()
        }

        return singleton.instance
    }
}

export default singleton