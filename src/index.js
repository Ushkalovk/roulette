import Phaser from 'phaser';
import logoImg from './assets/logo.png';


export const isMobile =
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent) || navigator.maxTouchPoints > 0;

class MyGame extends Phaser.Scene
{
    constructor ()
    {
        super();
    }

    preload ()
    {
        this.load.image('logo', logoImg);
    }
      
    create ()
    {
        const logo = this.add.image(400, 150, 'logo');
      
        this.tweens.add({
            targets: logo,
            y: 450,
            duration: 2000,
            ease: "Power2",
            yoyo: true,
            loop: -1
        });
    }
}

const config = {
    type: Phaser.AUTO,
    parent: 'phaser-example',
    width: 600,
    height: 860,
    scene: MyGame
};

const game = new Phaser.Game(config);
