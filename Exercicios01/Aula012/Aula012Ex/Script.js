var tempo = new Date()
var hora = tempo.getHours()
var div = document.getElementsByTagName('div')[0]
var img = document.getElementsByTagName('div')[1]
div.innerText = `Agora são ${hora} horas`

if (hora >= 12 && hora <= 19){
    document.body.style.backgroundColor = "#C78A30"
    img.style.backgroundImage = 'url(Imagem/Tarde.jpeg)'
} else if (hora > 19){
    document.body.style.backgroundColor = "#4D4D4D"
    img.style.backgroundImage = 'url(Imagem/Noite.jpeg)'
}