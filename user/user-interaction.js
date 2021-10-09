import { gameStatusAfterMove } from '../core-logic/game-status.js';
import { updateGameStatus } from '../core-logic/update-game-status.js';
import { getUserTurn } from './user-turn.js';

export function userInteraction(table) {
    Array.from(table.firstElementChild.children).forEach((row) => {
        Array.from(row.children).forEach((cell) => {
            const button = cell.querySelector('button');
            const rowId = parseInt(row.getAttribute('id'), 10);
            const buttonId = parseInt(button.getAttribute('id'), 10);
            button.addEventListener('click', () => {
                if (getUserTurn() === 'X' && button.textContent === '') {
                    button.textContent = 'X';
                    const status = gameStatusAfterMove(rowId, buttonId, 'X');
                    updateGameStatus(status, 'X');
                } else {
                    if (button.textContent === '') {
                        button.textContent = 'O';
                        const status = gameStatusAfterMove(
                            rowId,
                            buttonId,
                            'O'
                        );
                        updateGameStatus(status, 'O');
                    }
                }
            });
        });
    });
}
