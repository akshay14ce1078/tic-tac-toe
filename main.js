import { initializeGame } from './core-logic/game-status.js';
import { userInteraction } from './user/user-interaction.js';

const table = document.getElementById('tabelId');

function bootstarpGame() {
    initializeGame();
    userInteraction(table);
}

bootstarpGame();
