function calc() {
    let num = document.getElementById('inum')
    let tab = document.getElementById('itab')

    if(num.value.length == 0) {
        window.alert('Por favor, digite um número!')
    } else {
        let n = Number(num.value)
        tab.innerHTML = ''

        for(i = 0; i <= 10; i++) {
            item = document.createElement('option')
            item.text = `${n} x ${i} = ${(n * i)}`
            item.value = `tab${i}`
            tab.appendChild(item)
        }
    }
}