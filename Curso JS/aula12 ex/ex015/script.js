function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('iano')
    var res = document.getElementById('res')

    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('sex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if (fsex[0].checked) {
            genero = 'Homem'
            
            if (idade >= 0 && idade < 10) {
                // Bebe
                img.setAttribute('src', 'imagens/bebe-mas.jpg')
            } else if (idade < 21) {
                // Jovem
                img.setAttribute('src', 'imagens/jovem-mas.jpg')
            } else if (idade < 50) {
                // Adulto
                img.setAttribute('src', 'imagens/adulto-mas.jpg')
            } else {
                // Idoso
                img.setAttribute('src', 'imagens/idoso-mas.jpg')
            }
        } else {
            genero = 'Mulher'

            if (idade >= 0 && idade < 10) {
                // Bebe
                img.setAttribute('src', 'imagens/bebe-fem.jpg')
            } else if (idade < 21) {
                // Jovem
                img.setAttribute('src', 'imagens/jovem-fem.jpg')
            } else if (idade < 50) {
                // Adulto
                img.setAttribute('src', 'imagens/adulto-fem.jpg')
            } else {
                // Idoso
                img.setAttribute('src', 'imagens/idoso-fem.jpg')
            }
        }

        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}