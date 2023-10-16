let num = document.getElementById('num')
let sel = document.getElementById('sel')
let valor = []

function Adicionar(){
    if(Number(num.value) < 1 || Number(num.value) > 100){
        window.alert('[ERRO] Dados inválidos')
    }else {
        let n = Number(num.value)
        let item = document.createElement('option')
        item.text = `Adicionado o valor ${n}`
        sel.appendChild(item)
        valor.push(n)
    }
}