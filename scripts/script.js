
let theme = localStorage.getItem('theme')
let themeDots = document.getElementsByClassName('theme-dot')

if(theme != null){
    setTheme(theme)
}

for(var i = 0; themeDots.length > i; i++){
    themeDots[i].addEventListener('click', function(){
        let mode = this.dataset.mode

        setTheme(mode)
    })
}

function setTheme(mode){

    switch (mode) {
        case 'green':
            document.getElementById('theme-style').href = 'theme-styles/green.css'
            break;
        case 'blue':
            document.getElementById('theme-style').href = 'theme-styles/blue.css'
        break;
        case 'purple':
            document.getElementById('theme-style').href = 'theme-styles/purple.css'
        break;
        default:
            document.getElementById('theme-style').href = 'default.css'
            break;
    }

    localStorage.setItem('theme', mode)
}