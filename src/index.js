import Phaser from "phaser";

import MyGame from "./scenes/MyGame";

const config = {
	type: Phaser.AUTO,
	parent: "game-box",
	scale: {
		mode: Phaser.Scale.FIT,
		width: 760 * 2,
		height: 480 * 2,
	},
	width: 800,
	height: 600,
	scene: MyGame,
};

const game = new Phaser.Game(config);
