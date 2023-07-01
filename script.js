function toggleMode() {
  
  const html = document.documentElement
  html.classList.toggle("light")


  const img = document.querySelector("#profile img")


  if (html.classList.contains("light")) {

    img.setAttribute("src", "./assets/avatar-light.png")
    img.setAttribute("alt", "Foto de Igor Coelho andando de slackline na praia.")

  } 
  
  else {

    img.setAttribute("src", "./assets/avatar.png")
    img.setAttribute("alt", "Foto de Igor Coelho sorrindo.")

  }
}
