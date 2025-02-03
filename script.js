//switch
function togglemode() {
  const html = document.documentElement //pega o documento html
  html.classList.toggle("light") //liga e desliga (botão)

  //pega a tag da img
  const img = document.querySelector("#profile img")

  //substituir a imagem
  if (html.classList.contains("light")) {
    //se tiver ligth adicione a imaguem light
    img.setAttribute("src", "./assets/avatar-light.png")
    img.setAttribute("alt", "foto de Mayk Brito sorrindo, usando oculos escuro")
  } else {
    //se não, manter a imagem normal (se tiver sem light)
    img.setAttribute("src", "./assets/avatar.png")
    img.setAttribute(
      "alt","foto de Mayk Brito sorrindo, usando óculos e camisa preta, barba e fundo amarelo"
    )
  }
}
