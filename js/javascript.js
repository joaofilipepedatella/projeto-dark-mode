const changeThemeBtn = document.querySelector('#change-theme')

/* Mudar para dark mode */

function mudarDarkMode() {
    document.body.classList.toggle('dark')
}

/* Carregar Light ou Dark Mode */

function carregarMode() {
    const darkMode = localStorage.getItem('dark')

    if(darkMode) {
        mudarDarkMode()
    }
}

carregarMode()

changeThemeBtn.addEventListener('change', function () {
    mudarDarkMode()

    /* Salvar ou Remover dark mode da localStorage */
    localStorage.removeItem('dark')

    if (document.body.classList.contains('dark')) {
        localStorage.setItem('dark', 1)
    }
})