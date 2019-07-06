import Game from './game.js';

window.game = new Game(window.innerWidth, window.innerHeight)
window.game.setup();
window.game.loop();
