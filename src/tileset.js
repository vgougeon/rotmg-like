class Tileset {
    constructor(url, size){
        let tileset = this
        this.img = PIXI.BaseTexture.fromImage(url);
        this.tilesize = size
        this.tile = []
        this.img.on('loaded', function() {
            tileset.width = this.width
            tileset.height = this.height
            for(let j = 0; j < Math.trunc(tileset.height / tileset.tilesize); j++){
            for(let i = 0; i < Math.trunc(tileset.width / tileset.tilesize); i++){
                tileset.tile.push(
                    new PIXI.Texture(this, new PIXI.Rectangle(0 + i * tileset.tilesize, 0 + j * tileset.tilesize, tileset.tilesize, tileset.tilesize))
                )
            }
            }
            console.log(tileset.tile)
        });
    }
}
export default Tileset;
