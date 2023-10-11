  let ini = document.querySelector('input#ininumber')
  let fim = document.querySelector('input#fimnumber')
  let passo = document.querySelector('input#passonumber')
  let res = document.querySelector('div#res')

function contar () {
  
    if (!ini.value) {
   res.innerHTML = `Impossível contar!`
    } else if (passo.value == 0) {
      alert(`Passo inválido! Considerando PASSO 1`)
      for (ini.value; ini.value > fim.value; ini.value++)
    }
  
}