import { getUserTurn, updateUserTurn } from './user-turn'

export function userInteraction(table) {
    Array.from(table.firstElementChild.children).forEach((row) => {
        Array.from(row.children).forEach((cell) => {
            const button = cell.querySelector('button')
            button.addEventListener('click', () => {
                if (getUserTurn() === 'X' && button.textContent === '') {
                    button.textContent = 'X'
                    updateUserTurn('O')
                } else {
                    if (button.textContent === '') {
                        button.textContent = 'O'
                        updateUserTurn('X')
                    }
                }
            })
        })
    })
}
