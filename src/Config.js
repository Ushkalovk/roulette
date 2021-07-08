import { CANVAS, Scale } from "phaser";
import { BeforeLoad } from "./scenes/BeforeLoad";
import { Loader } from "./scenes/Loader";
import { MainWindow } from "./scenes/MainWindow";

export const isMobile =
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent) || navigator.maxTouchPoints > 0;

export const gameWidth = 800;
export const height = 600;        
export const offsetX = gameWidth / 2;        

const config = {
    type: CANVAS,
    parent: "slots",
    powerPreference: "high-performance",
    scale: {
        // mode: Scale.HEIGHT_CONTROLS_WIDTH,
        autoCenter: Scale.CENTER_BOTH,
        width: gameWidth,
        height: height,
    },
    audio: {
        disableWebAudio: false,
    },
    dom: {
        createContainer: false,
    },
    scene: [
        BeforeLoad,
        Loader,
        MainWindow,

    ],
};

export const game = new Phaser.Game(config);