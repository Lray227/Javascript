var data = new Date().getFullYear()
var idade = document.getElementById('inum')
var man = document.getElementById('Masc')
var woman = document.getElementById('Fem')
var ans = document.getElementById('res')

function cal(){
    if (man = true){
        var res = Number(data) - Number(idade.value)
        var sex = 'um Homem'
    } else if (man = false){
        var res = Number(data) - Number(idade.value)
        var sex = 'uma Mulher'
    }
    ans.innerHTML = `Detectamos ${sex} de ${res} anos`
}