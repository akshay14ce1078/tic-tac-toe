import { updateUserTurn } from '../user/user-turn.js';

const statusElement = document.getElementById('current-game-status');

export function updateGameStatus(status, lastUser) {
    if (!!status) {
        statusElement.textContent = status;
        return;
    }

    if (lastUser === 'X') {
        statusElement.textContent = `Now it is O's turn`;
        updateUserTurn('O');
    } else {
        statusElement.textContent = `Now it is  X's turn`;
        updateUserTurn('X');
    }
}
