import { userInteraction } from './user/user-interaction.js';

const table = document.getElementById('tabelId');

function startGame() {
    userInteraction(table);
}

startGame();
