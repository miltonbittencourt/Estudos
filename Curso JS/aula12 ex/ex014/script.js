function carregar() {
    var msg = document.getElementById('msg')
    var foto = document.getElementById('foto')
    var data = new Date()
    var hora = data.getHours()
 

    msg.innerHTML = `Agora são ${hora} horas.`

    if (hora >= 0 && hora < 12) {
        // Bom dia
        foto.src = "imagens/manha.jpg"
        document.body.style.background = '#e2cd9f'
    } else if (hora >= 12 && hora < 18) {
        
        foto.src = "imagens/tarde.jpg"
        document.body.style.background = '#b9846f'
    } else {
        //Boa noite
        foto.src = 'imagens/noite.jpg'
        document.body.style.background = 'rgb(0, 0, 114)'
    }
}

