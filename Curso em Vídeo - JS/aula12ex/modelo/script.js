function carregar () {
  let msg = document.querySelector('div#msg')
  let img = document.getElementById('imagem')
  let date = new Date()
  let hour = date.getHours()
  msg.innerHTML = `Agora são ${hour} horas.`
  
  if (hour >= 0 && hour < 12) {
    document.body.style.background = '#79AC78'
    img.src = 'foto_manha.png'
  } else if (hour >= 12 && hour < 18) {
    document.body.style.background = '#CD5C08'
    img.src = 'foto_tarde.png'
  } else {
    document.body.style.background = '#132043'
    img.src = 'foto_noite.png'
  }
}