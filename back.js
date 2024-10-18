let numero = window.document.querySelector("input#n_d")
let select = window.document.querySelector("select#select_ip")
let dados_local = window.document.getElementById("dados_local")
let vetor = []

function val_vetor(n){
    if(Number(n) >= 1  &&  Number(n) <= 100){
           return true
    }else{
        return false
    }
}

function sub_vetor(n, l){
    if(l.indexOf(Number(n)) == -1){
        return true
    }else{
        return false
    }
}

function adicionar(){
   if(val_vetor(numero.value) && sub_vetor(numero.value, vetor)){
     vetor.push(Number(numero.value))
     select.innerHTML += `<option> valor ${numero.value} adicionado </option>`
     dados_local.innerHTML =""
   }else{
    window.alert("valor invalido ou ja foi digitado")
   }
   numero.value =""
   numero.focus()
}

function finalizar(){
    if(vetor.length == 0){
        window.alert("ERRO: adicione valores antes de finalizar. ")
    }else{
        let maior = vetor[0]
        let menor = vetor[0]
        let soma = 0
        let media = 0
        for(let pos in vetor){
            soma += vetor[pos]
            if(vetor[pos] > maior){
                maior = vetor[pos]
            }
            if(vetor[pos] < menor){
                menor = vetor[pos]
            }
        }
        media = soma / vetor.length
        dados_local.style.fontSize ="13px"
        dados_local.innerHTML +=`<p> São ${vetor.length} valores armazenados. </p>`
        dados_local.innerHTML +=`<p> O maior valor é ${maior}.</p>`
        dados_local.innerHTML +=`<p> O menor valor é ${menor}.</p>`
        dados_local.innerHTML +=`<p> A soma de todos os valores é ${soma}.</p>`
        dados_local.innerHTML +=`<p> A Média de todos os números é ${media}.</p>`
    }
}
