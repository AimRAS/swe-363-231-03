// Switch function
const switchTheme = () => {
    // Get root element and data-theme value
    const rootElem = document.documentElement
    let dataTheme = rootElem.getAttribute('data-theme'),
        newTheme

    newTheme (dataTheme === 'light') ? 'dark' : 'light'

    rootElem.setAttribute('data-theme', newTheme)
}

// Add event listener for the theme switcher
document.querySelector('#logo').addEventListener('click', switchTheme)



