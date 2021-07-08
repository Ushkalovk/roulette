import { offsetX, isMobile} from "../Config";
import { imagesOptions } from "./imagesOptions";
import { buttonsOptions } from "./buttonsOptions";
import { textOptions } from "./textOptions";


class MainWindow extends Phaser.Scene {
    constructor() {
        super("MainWindow");
        this.buttons = [];
        this.isRaceBet = false;
    }
    preload(){

    }
    create(){
        this.isSpin = false;
        const device = isMobile ? "mobile" : "desktop";

        Object.entries(imagesOptions).map((option) => {
            const { x, y, scale } = option[1][device],
                { origin, visible } = option[1];

            this[option[0].substr(0, option[0].length - 4)] = this.add
                .image(x, y, "spritesheet", option[0])
                .setOrigin(origin.x, origin.y)
                .setScale(scale)
                .setVisible(visible !== false);

        });

        Object.entries(buttonsOptions).map((option) => {
            const { x, y, scale } = option[1][device],
                { origin, visible } = option[1];

            this.buttons[option[0].substr(0, option[0].length - 4)] = this.add
                .image(x, y, "spritesheet", option[0])
                .setOrigin(origin.x, origin.y)
                .setScale(scale)
                .setVisible(visible !== false)
                .setInteractive();

        });

        Object.entries(textOptions).map((option) => {
            const { x, y } = option[1][device],
                { origin, fontSize, color, text, fontWeight } = option[1];
            this[option[0]] = this.add
                .text(x, y, text, {
                    fontSize: fontSize,
                    color: color,
                    align: 'center',
                    fontStyle: fontWeight
                })
                .setOrigin(origin.x, origin.y);

        });
        this.shadow = [];
        this.shadow2 = [];
        this.shadow3 = [];
        this.createShadows();
        this.buttonInstances();
        
        
    }

    update(){
        this['wheel_spin'].angle += 2;
        this['wheel_top'].angle +=2;
    }

    createShadows(){
        for(let i = 0; i < 12; i++){
            this.shadow[i] = this.add.rectangle(706, 473 - 39 * i, 85, 35, 0xffffff).setOrigin(0);
            this.shadow[i].isClicked = false;
            this.shadow[i].setInteractive();
            this.shadow[i].setAlpha(0.0000001)
    
            this.shadow[i].on('pointerover', ()=>{
                this.shadow[i].setAlpha(0.4)
            })
            this.shadow[i].on('pointerdown', ()=>{
                this.shadow[i].setAlpha(0.4)
                this.shadow[i].isClicked = !this.shadow[i].isClicked;
    
            })
            
            this.shadow[i].on('pointerout', ()=>{
                !this.shadow[i].isClicked && this.shadow[i].setAlpha(0.0000001)
            })
        }
        for(let i = 0; i < 12; i++){
            this.shadow2[i] = this.add.rectangle(617, 473 - 39 * i, 85, 35, 0xffffff).setOrigin(0);
            this.shadow2[i].isClicked = false;
    
            this.shadow2[i].setInteractive();
            this.shadow2[i].setAlpha(0.0000001)
            this.shadow2[i].on('pointerdown', ()=>{
                this.shadow2[i].setAlpha(0.4)
                this.shadow2[i].isClicked = !this.shadow2[i].isClicked;
            })
            this.shadow2[i].on('pointerover', ()=>{
                this.shadow2[i].setAlpha(0.4)
            })
            this.shadow2[i].on('pointerout', ()=>{
                !this.shadow2[i].isClicked && this.shadow2[i].setAlpha(0.0000001)
    
            })
        }
        for(let i = 0; i < 12; i++){
            this.shadow3[i] = this.add.rectangle(528, 473 - 39 * i, 85, 35, 0xffffff).setOrigin(0);
            this.shadow2[i].isClicked = false;
            this.shadow3[i].setInteractive();
            this.shadow3[i].setAlpha(0.0000001)
    
            this.shadow3[i].on('pointerdown', ()=>{
                this.shadow3[i].setAlpha(0.4)
                this.shadow3[i].isClicked = !this.shadow3[i].isClicked;
            })
            this.shadow3[i].on('pointerover', ()=>{
                this.shadow3[i].setAlpha(0.4)
            })
            this.shadow3[i].on('pointerout', ()=>{
                !this.shadow3[i].isClicked && this.shadow3[i].setAlpha(0.0000001)
    
            })
        }
    }

    buttonInstances(){
        this.buttons["start"].on("pointerdown", ()=>{
            this["Start"].y +=2
        })
        this.buttons["start"].on("pointerup", ()=>{
            this["Start"].y -=2
        })

        this.buttons["undo table"].on("pointerdown", ()=>{
            this["Undo table"].y +=2
        })
        this.buttons["undo table"].on("pointerup", ()=>{
            this["Undo table"].y -=2
        })

        this.buttons["repeat bet"].on("pointerdown", ()=>{
            this["Repeat bet"].y +=2
        })
        this.buttons["repeat bet"].on("pointerup", ()=>{
            this["Repeat bet"].y -=2
        })

        this.buttons["Race bet"].on("pointerdown", ()=>{
            this["Race bet"].y +=2
        })
        this.buttons["Race bet"].on("pointerup", ()=>{
            this["Race bet"].y -=2

            this.isRaceBet = !this.isRaceBet;
            this["table"].setVisible(!this["table"].visible)
            this["racebet"].setVisible(!this["racebet"].visible)



        })

        this.buttons["Exit"].on("pointerdown", ()=>{
            this["Exit"].y +=2
        })
        this.buttons["Exit"].on("pointerup", ()=>{
            this["Exit"].y -=2
        })
    }

}

export { MainWindow };