import {
    gameWidth as width,
    height,
    offsetX,
    isMobile,
    game
} from "../Config";

class BeforeLoad extends Phaser.Scene {
    constructor() {
        super("BeforeLoad");
    }
    preload(){
        this.load.image('loader', `/src/assets/sprites/main/load_amanet.jpg`);
        this.load.image('btn_continue', `/src/assets/sprites/buttons/btn_continue.png`);

    }
    create(){ 
        this.bg = this.add.image(0, 0, 'loader').setOrigin(0);


        this.scene.launch("Loader");
    }

    createBtn(){
        this.continueBtn = this.add.image(offsetX, height / 2 + 103, 'btn_continue').setOrigin(0.5);
        this.continueBtnText = this.add.text(offsetX, height / 2 + 103, 'Continue', {
            fontSize: "24px",
            color: "yellow"
        }).setOrigin(0.5);
                this.continueBtn.setInteractive();
                this.continueBtn.on('pointerup', () => { 
                    game.scene.keys["BeforeLoad"].bg.destroy();
                    this.continueBtn.destroy();
                    this.continueBtnText.destroy();

                    this.scene.launch("MainWindow");
                });
    }
}
export { BeforeLoad };