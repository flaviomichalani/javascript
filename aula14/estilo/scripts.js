function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var minuto = data.getMinutes()

    // adicionando um zero à esquerda se o minuto for menor que 10
    if (minuto < 10) {
        minuto = '0' + minuto
    }

    msg.innerHTML = `Agora são ${hora}:${minuto}.<br/>`
    if (hora >= 0 && hora < 12) {
        msg.innerHTML += 'Bom dia!'
        img.src = "imagens/bomdia.jpg"
        document.body.style.background = '#ffbe0b'
    } else if (hora >= 12 && hora <= 18) {
        msg.innerHTML += 'Boa tarde!'        
        img.src = "imagens/boatarde.jpg"
        document.body.style.background = '#b9846f'
    } else {
        msg.innerHTML += 'Boa noite!'
        img.src = "imagens/boanoite.jpg"
        document.body.style.background = '#515154'
    }
}

