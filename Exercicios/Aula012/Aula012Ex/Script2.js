var data = new Date().getFullYear()
var idade = document.getElementById('inum')
var r = document.getElementById('res')

function cal(){
    r.innerHTML = Number(data) - Number(idade.value)
}