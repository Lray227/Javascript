let num = document.getElementById('num')
let sel = document.getElementById('isel')

function Adicionar(){
    let n = [Number(num.value)]
    if(num.value.length == 0){
        window.alert('Insira os dados')
    }else {
        sel.innerText = ''
        for(let pos in n){
            let item = document.createElement('option')
            item.text = `Adicionado o valor ${n}`
            sel.appendChild(item)
        }
    }
}
