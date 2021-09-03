import { userInteraction } from "./users-interaction";

const table = document.getElementById('tabelId');

function startGame() {
    userInteraction(table);
}

startGame();
