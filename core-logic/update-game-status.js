import { updateUserTurn } from '../user/user-turn.js';

const statusElement = document.getElementById('current-game-status');

// 0 => match is still going on ; 1 => match is done win/draw
let GAME_STATUS = 'live';

export const isGameStillOn = () => GAME_STATUS === 'live';

export const isGameFinished = () => GAME_STATUS === 'finish';

export function updateGameStatus(status, lastUser) {
    if (!!status) {
        statusElement.textContent = status;
        GAME_STATUS = 'finish';
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

// todo
// show some animation on user win
