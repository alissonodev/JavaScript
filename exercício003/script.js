function contar() {
    let ini = document.getElementById('txti')
    let fim = document.getElementById('txtf')
    let passo = document.getElementById('txtp')
    let res = document.getElementById('res')

    // Verificação se os campos estão preenchidos
    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        res.innerHTML = 'Impossivel contar.'
    } else {
        res.innerHTML = 'Contando: <br>'
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        
        if(p <= 0) {
            alert('Passo invalido! considerando passo 1')
            p = 1
        }

        if(i < f){
            //Contagem crescente
            for(let c = i ; c <= f; c += p){
                res.innerHTML += `${c} \u{1F603}`
            }
            
        } else {
            //Contagem regressiva
            for(let c = i; c >= f; c-= p){
                res.innerHTML += `${c} \u{1F603}`
            }
        }
        res.innerHTML += `Fim \u{1F3C1}`
    }
}