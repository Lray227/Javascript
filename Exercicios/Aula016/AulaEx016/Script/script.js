let num = document.getElementById('num')
let sel = document.getAnimations('sel')
let valor = []

function Adicionar(){
    if(Number(num.value) < 1 || Number(num.value) > 100){
        window.alert('[ERRO] Dados inválidos')
    }
}