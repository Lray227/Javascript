var ano = new Date().getFullYear()
var data = document.getElementById('inum')
var ans = document.getElementById('res')
var sex = document.getElementsByName('sex')

function Verificar(){
    var idade = Number(ano) - Number(data.value)
    var fundo = document.getElementById('imagem').style
    
    if (data.value.length == 0 || Number(data.value) > ano){
        window.alert('[ERRO] Confira os dados')
    }else if (sex[0].checked){
        var gender = 'Homem'
        fundo.display = 'block'
        if(idade >= 0 && idade < 10){
            fundo.backgroundImage = 'url(Imagem/Bebe.jpeg)'
        }else if(idade < 21){
            fundo.backgroundImage = 'url(Imagem/jovem.jpeg)'
        }else if(idade < 50){
            fundo.backgroundImage = 'url(Imagem/adulto.jpeg)'
        }else {
            fundo.backgroundImage = 'url(Imagem/idoso.png)'
        }
    } else {
        var gender = 'Mulher'
        fundo.display = 'block'
        if(idade >= 0 && idade < 10){
            fundo.backgroundImage = 'url(Imagem/bebef.jpeg)'
        }else if(idade < 21){
            fundo.backgroundImage = 'url(Imagem/jovemf.jpeg)'
        }else if(idade < 50){
            fundo.backgroundImage = 'url(Imagem/adultof.jpeg)'
        }else {
            fundo.backgroundImage = 'url(Imagem/idosa.png)'
        }
    }
    ans.innerHTML = `Detectamos ${gender} de ${idade} anos`
}