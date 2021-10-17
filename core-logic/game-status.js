let gameMatrix;
let movesCounter;

export function initializeGame() {
    gameMatrix = [
        [null, null, null],
        [null, null, null],
        [null, null, null],
    ];
    movesCounter = 0;
}

export function gameStatusAfterMove(rowPos, colPos, playerValue) {
    gameMatrix[rowPos][colPos] = playerValue;
    // count the move
    movesCounter++;

    let matchingCounter = 0;

    //check for row's
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            if (matchingCounter === 3) {
                return `player ${playerValue} wins`;
            }

            if (gameMatrix[i][j] === playerValue) {
                matchingCounter++;
            } else {
                matchingCounter = 0;
                break;
            }
        }
    }

    //check for column's
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            if (matchingCounter === 3) {
                return `player ${playerValue} wins`;
            }

            if (gameMatrix[j][i] === playerValue) {
                matchingCounter++;
            } else {
                matchingCounter = 0;
                break;
            }
        }
    }

    //check for diagnols
    for (let i = 0; i < 3; i++) {
        if (gameMatrix[i][i] === playerValue) {
            matchingCounter++;
        } else {
            matchingCounter = 0;
            break;
        }
    }

    if (matchingCounter === 3) {
        return `player ${playerValue} wins`;
    }

    // check for cross diagnol
    for (let j = 2, i = 0; j >= 0 && i < 3; j--, i++) {
        if (gameMatrix[j][i] === playerValue) {
            matchingCounter++;
        } else {
            matchingCounter = 0;
            break;
        }
    }

    if (matchingCounter === 3) {
        return `player ${playerValue} wins`;
    }

    // all moves done then grame is draw
    if (movesCounter === 9) {
        return 'Game Draw';
    }
}
