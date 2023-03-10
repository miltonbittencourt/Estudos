/* function contar() {
    const ini = document.getElementById('iinicio')
    const fim = document.getElementById('ifim')
    const pas = document.getElementById('ipasso')
    var res = document.getElementById('ires')
    var fra = ''
    
    if (ini.value.length == 0 || fim.value.length == 0 || pas.value.length == 0 ) {
        window.alert('[ERRO] Faltam dados!')
    } else {
        if (pas.value == 0) {
            window.alert('[ERRO] Passo não pode ser igual a 0! O cálculo será feito considerando passo igual a 1.')
            for (i = Number(ini.value); i <= Number(fim.value); i++) {
                fra += `${i} 👉 `
            }
        } else {
            for (i = Number(ini.value); i <= Number(fim.value); i += Number(pas.value)) {
                fra += `${i} 👉 `
            }
        }
        fra += '🏁'
        res.innerHTML = 'Contando: <br>' + fra
    }
} */

function contar() {
    let ini = document.getElementById('iinicio')
    let fim = document.getElementById('ifim')
    let pas = document.getElementById('ipasso')
    let res = document.getElementById('ires')

    if (ini.value.length == 0 || fim.value.length == 0 || pas.value.length == 0 ) {
        window.alert('[ERRO] Faltam dados!')
        res.innerHTML = 'Impossível contar!'
    } else {
        res.innerHTML = 'Contando: <br>'

        if (Number(pas.value) <= 0) {
            window.alert('[ERRO] Passo inválido! A contagem será feita considerando passo igual a 1.')
            pas.value = 1
        }

        if (Number(ini.value) < Number(fim.value)) {
            // Contagem crescente
            for(i = Number(ini.value); i <= Number(fim.value); i += Number(pas.value)) {
                res.innerHTML += `${i} 👉 `
            } 
        } else {
            // Contagem regressiva
            for(i = Number(ini.value); i >= Number(fim.value); i -= Number(pas.value)) {
                res.innerHTML += `${i} 👉 `
            } 
        }
        
        res.innerHTML += '🏁'
    }
}

