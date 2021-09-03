
const initialUserTurnValue = 'X';

let userTurn = initialUserTurnValue;

function isValidUser(value) {
    return value === 'X' || value === 'O';
}

export const updateUserTurn = (value) => {
    if(isValidUser(value)){
        userTurn =  value;
    }else{
        console.warn('Invalid user');
    }
}

export const getUserTurn = () => userTurn;