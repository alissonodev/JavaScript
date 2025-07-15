function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || fano.value > ano){
        alert('[ERRO] Verifique os dados e tente novamente!')
    }else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero =  ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            gênero = 'Homen'
            if(idade >= 0 && idade < 10) {
                img.setAttribute('src', 'imgbebem.png')
            }else if (idade < 21) {
                img.setAttribute('src', 'imgjovemm.png')
            }else if (idade < 50) {
                img.setAttribute('src', 'imgadultom.png')
            }else {
                img.setAttribute('src', 'imgvelhom.png')
            } 
        }else if (fsex[1].checked) {
            gênero = 'Mulher'
            if(idade >= 0 && idade < 10) {
                img.setAttribute('src', 'imgbebef.png')
            }else if (idade < 21) {
                img.setAttribute('src', 'imgjovemf.png')
            }else if (idade < 50) {
                img.setAttribute('src', 'imgadultof.png')
            }else {
                img.setAttribute('src', 'imgvelhof.png')
            } 
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
        res.appendChild(img)
    }
}