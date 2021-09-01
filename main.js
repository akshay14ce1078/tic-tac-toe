const table = document.getElementById('tabelId');

let userTurn = 'X'

Array.from(table.firstElementChild.children).forEach((row)=>{
    Array.from(row.children).forEach((cell)=>{
        cell.addEventListener('click',()=>{
            if(userTurn === 'X'){
                cell.textContent = 'X';
                userTurn = 'O';
            }else {
                cell.textContent = 'O';
                userTurn = 'X';
            }
        })
    })
})