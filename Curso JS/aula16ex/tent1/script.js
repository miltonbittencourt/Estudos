let num = document.getElementById('inum')
let list = []
let select = document.querySelector('#myselect')

function add() {
    if(num <= 1 || num > 100) {
        window.alert('Número inválido!')
    } else {
        if (list.indexOf(num) == -1) {
            list.push(num)
            select.appendChild
        } else {
            window.alert('Esse valor já foi inserido!')
        }
    }
}