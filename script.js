function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  // pegar tag img
  const img = document.querySelector("#profile img")

  // substituir imagem
  if (html.classList.contains("light")) {
    // se tiver light mode, adicionar a imagem light
    img.setAttribute("src", "./assets/avatar-light.png")
    img.setAttribute("alt", "Foto de Igor Coelho andando de slackline na praia.")
  } else {
    // se tiver sem light mode, adicionar imagem padrão
    img.setAttribute("src", "./assets/avatar.png")
    img.setAttribute("alt", "Foto de Igor Coelho sorrindo.")
  }
}
