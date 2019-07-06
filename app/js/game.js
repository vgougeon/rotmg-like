class Game {
    constructor(width, height){
        this.width = width
        this.height = height
        this.app = new PIXI.Application({
            width: this.width, height: this.height, backgroundColor: 0x202041, resolution: window.devicePixelRatio || 1,
        })
        document.body.appendChild(this.app.view)
        this.map = new Map("plain")
    }
}
