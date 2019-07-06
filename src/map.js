import Tileset from './tileset.js';
class Map {
    constructor(map){
        this.scale = 4
        this.tilesize = 64
        this.tileset = new Tileset('assets/tileset/simple.png')
    }
    draw(){
        for(let i = 0; i < window.game.width / this.tilesize; i++){
            for(let j = 0; j < window.game.height / this.tilesize; j++){
                let sprite = PIXI.Sprite.from(this.tileset.tile[0])
                sprite.scale.x = this.scale
                sprite.scale.y = this.scale

                sprite.x = i * this.tilesize
                sprite.y = j * this.tilesize
                window.game.app.stage.addChild(sprite)
            }
        }
    }
}
export default Map;
