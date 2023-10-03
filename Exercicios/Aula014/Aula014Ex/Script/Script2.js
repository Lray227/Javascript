var tab = document.getElementById('tab')
tab.addEventListener('click', tabuada)

function tabuada(){
    let num = document.getElementById('txtn')
    let tabu = document.getElementById('seltab')
    if(num.value.length == 0){
        window.alert('Por favor, digite um número!')
    }else {
        let n = Number(num.value)
        let c = 1
        tabu.innerHTML = ''
        while (c <= 10){
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            item.value = `tabu${c}`
            tabu.appendChild(item)
            c++
        }
    }
    
}