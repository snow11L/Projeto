function toggleMode() {
    const html = document.documentElement;
    html.classList.toggle("light");

    // pegar a tag img
    const img = document.querySelector("#profile img")

    // substituir imagem
    if (html.classList.contains('light')) {
        // se tiver light mode, adicionar a imagem light
        img.setAttribute('src', './img/avatar-light.png')
        img.setAttribute('alt', 'avatar light')
    } else {
        //set tiver sem light mode, manter a imagem normal
        img.setAttribute('src', './img/avatar.png')
        img.setAttribute("alt", "avatar")
    }
}