var data = new Date().getFullYear()
var idade = document.getElementById('inum')
var man = document.getElementById('Masc').value
var woman = document.getElementById('Fem').value
var ans = document.getElementById('res')

function cal(){
    if (man = true){
        var res = Number(data) - Number(idade.value)
        var sex = 'um Homem'
    } else if (woman = true){
        var res = Number(data) - Number(idade.value)
        var sex = 'uma Mulher'
    }
    ans.innerHTML = `Detectamos ${sex} de ${res} anos`
}