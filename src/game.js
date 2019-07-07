import * as PIXI from "./pixi.js";
import Map from './map.js';
import Player from './player.js';
import Viewport from './viewport.js';
class Game {
    constructor(width, height){
        PIXI.settings.SCALE_MODE = PIXI.SCALE_MODES.NEAREST;
        this.width = width
        this.height = height
        this.app = new PIXI.Application({
            width: this.width, height: this.height, backgroundColor: 0x202041, resolution: window.devicePixelRatio || 1,
        })
        document.body.appendChild(this.app.view)
        this.map = new Map("plain", this)
        this.player = new Player(this)
        this.viewport = new Viewport()
    }
    setup(){
    }
    loop(){
        this.app.ticker.add((delta) => {
            this.player.update()
            this.viewport.update()
            this.map.update()
        });
    }
}
export default Game
