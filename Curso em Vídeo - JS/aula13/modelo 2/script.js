function verificar () {
    let data = new Date()
    let ano = data.getFullYear()
    let formAno = document.querySelector('input#txtano')
    let res = document.querySelector('div#res')
    if (formAno.value.lenght == 0 || formAno.value > ano) {
    alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        let sexF = document.getElementsByName('radsex')
        let idade = ano - Number(formAno.value)
    }

}