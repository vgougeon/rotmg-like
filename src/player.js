class Player {
    constructor(game){
        window.addEventListener("keydown", event => {
            console.log(event.keyCode)
        });
        this.sprite = PIXI.Sprite.from('assets/sprites/player.png');
        this.sprite.scale.x = 0.1;
        this.sprite.scale.y = 0.1;
        game.app.stage.addChild(this.sprite)
        this.x = 0
        this.y = 0
    }
    update(){
        this.sprite.position.x += 1
    }
}
export default Player;
