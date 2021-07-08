import {
    gameWidth as width,
    height,
    offsetX,
    isMobile,
    game
} from "../Config";

class Loader extends Phaser.Scene {
    constructor() {
        super("Loader");
    }
    preload(){
        

    const progressBorder = this.add
        .graphics()
        .setDepth(100)
        .lineStyle(2, 0x464646, 1)
        .strokeRect(offsetX - 190, height / 2 + 100, 400, 10);
    // const bgProgress = this.add
    //     .graphics({ fillStyle: { color: 0x00001e } })
    //     .fillRect(0, 0, width, height);
     const progressBox = this.add.graphics({
        fillStyle: { color: 0x7aa838 },
    });
    this.load.on("progress", (value) => {
        progressBox.clear();
        progressBox.fillRect(
            offsetX - 188,
            height / 2 + 103,
            400 * value,
            5
        );
    });
    
        this.load.multiatlas(
            "spritesheet",
            `/src/assets/sprites/main/spritesheet.json`,
            `/src/assets/sprites/main`
        );

        this.load.on("complete", () => {
                progressBorder.destroy();
                progressBox.destroy();
                // bgProgress.destroy();
                game.scene.keys["BeforeLoad"].createBtn();
                
    });
        
       
    }
    create(){ 
    }
}
export { Loader };