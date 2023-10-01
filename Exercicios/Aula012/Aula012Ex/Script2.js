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
        if(idade >= 0 && idade < 10){
            fundo.backgroundimage = 'Imagem/Bebe.jpeg'
            fundo.display = 'block'
            //bebe
        }else if(idade < 21){
            //jovem
        }else if(idade < 50){
            //adulto
        }else {
            //idoso
        }
    } else {
        var gender = 'Mulher'
        if(idade >= 0 && idade < 10){
            //criança
        }else if(idade < 21){
            //jovem
        }else if(idade < 50){
            //adulto
        }else {
            //idoso
        }
    }
    ans.innerHTML = `Detectamos ${gender} de ${idade} anos`
}