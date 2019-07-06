import * as PIXI from "./pixi.js";
import Map from './map.js';
class Game {
    constructor(width, height){
        PIXI.settings.SCALE_MODE = PIXI.SCALE_MODES.NEAREST; 
        this.width = width
        this.height = height
        this.app = new PIXI.Application({
            width: this.width, height: this.height, backgroundColor: 0x202041, resolution: window.devicePixelRatio || 1,
        })
        document.body.appendChild(this.app.view)
        this.map = new Map("plain")
    }
    loop(){
        this.map.draw()
    }
}
export default Game
