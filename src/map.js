import Tileset from './tileset.js';
class Map {
    constructor(map, game){
        this.scale = 4
        this.tilesize = 64
        this.tileset = new Tileset('assets/tileset/simple.png', 16)
        this.container = new PIXI.Container();
        game.app.stage.addChild(this.container)
        this.lastX = 0
        this.lastY = 0
        this.matrix
        this.getMatrix()
    }
    draw(){
        let map = this
        if(!this.tileset.img.hasLoaded){
            setTimeout(function() {
              map.draw();
            }, 1);
            return false
        }
        // let x = window.game.viewport.x
        // let y = window.game.viewport.y
        // for(let i = -1; i < window.game.width / this.tilesize + 1 ; i++){
        //     for(let j = -1; j < window.game.height / this.tilesize + 1; j++){
        //         x = Math.trunc(window.game.viewport.x / this.tilesize + i)
        //         y = Math.trunc(window.game.viewport.y / this.tilesize + j)
        //         if(x >= 0 && x < this.matrix[0].length && y >= 0 && y < this.matrix.length){
        //             let sprite = PIXI.Sprite.from(this.tileset.tile[this.matrix[y][x]])
        //             sprite.scale.x = this.scale
        //             sprite.scale.y = this.scale
        //             sprite.x = i * this.tilesize
        //             sprite.y = j * this.tilesize
        //             this.container.addChild(sprite)
        //         }
        //     }
        // }
        //J'ai un viewport qui va de x a x + 1920 et de y a y + 1080
        //Je dois toujours dessiner dessus avec une marge
        //Je dois d'abord convertir mon viewport en valeur de grille
        let viewx = Math.trunc(window.game.viewport.x / this.tilesize)
        let viewy = Math.trunc(window.game.viewport.y / this.tilesize)
        let x
        let y
        //Je démarre donc de x et y pour aller vers x + 1920/64...
        // for(let i = viewy-1; i < window.game.height / this.tilesize + viewy + 1; i++){
        //     for(let j = viewx-1; j < window.game.width / this.tilesize + viewx + 1 ; j++){
        //
        //     }
        // }
        console.log(viewx)
        for(let i = viewx; i <= viewx + window.game.width / this.tilesize; i++){
            for(let j = viewy; j < this.matrix.length ; j++){
                x = Math.trunc(window.game.viewport.x / this.tilesize + i)
                y = Math.trunc(window.game.viewport.y / this.tilesize + j)
                if(x >= 0 && x < this.matrix[0].length && y >= 0 && y < this.matrix.length){
                    let sprite = PIXI.Sprite.from(this.tileset.tile[this.matrix[y][x]])
                    sprite.scale.x = this.scale
                    sprite.scale.y = this.scale
                    sprite.x = i * this.tilesize - window.game.viewport.x
                    sprite.y = j * this.tilesize - window.game.viewport.y
                    this.container.addChild(sprite)
                }
            }
        }
    }
    update(){
        this.container.position.x = -(window.game.viewport.x);
        this.container.position.y = -(window.game.viewport.y);
        //Check if new things to draw
    }
    getMatrix(){
        let map = this
        let request = new XMLHttpRequest();
        request.open("GET", "assets/maps/plain.map", true);
        request.send(null);

        request.onreadystatechange = function() {
           if(request.readyState === 4) { // What does this even mean?
               if(request.status === 200) {
                   let res = request.responseText
                   res = res.split("\n")
                   for(let i = 0; i < res.length; i++){
                       res[i] = res[i].split(" ")
                   }
                   console.log(res)
                   map.matrix = res
                   map.draw()
               }
           }
        }
    }
}
export default Map;
