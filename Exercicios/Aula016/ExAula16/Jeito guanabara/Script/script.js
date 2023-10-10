let num = document.getElementById('num')
let lista = document.getElementById('isel')
let res = document.getElementById('res')
let valores = []

function IsNumero(n){
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    }else {
        return false
    }
}

function Linlista(n, 1){
    if (l.indexOf(Number(n) != -1)) {
        return true
    }else{
        return false
    }
}

function Adicionar(){
    if (IsNumero(num.value) && LinLista(num.value)){
        window.alert('Tudo ok')
    }else {
        window.alert('Valor inválido ou já encontrado na lista.')
    }
}