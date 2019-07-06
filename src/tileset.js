class Tileset {
    constructor(url){
        this.tile = []
        this.img = PIXI.BaseTexture.fromImage(url);
        for(let i = 0; i < 5; i++){
            this.tile.push(
                new PIXI.Texture(this.img, new PIXI.Rectangle(0 + i * 16, 0, 16, 16))
            )
        }
        console.log(this.tile)
    }
}
export default Tileset;
