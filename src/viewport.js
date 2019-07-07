class Viewport {
    constructor(){
        this.x = 0
        this.y = 0
    }
    update(){
        this.x = window.game.player.x
        this.y = window.game.player.y
    }
}
export default Viewport;
