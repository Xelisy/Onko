let inputJs = document.querySelectorAll('.inputCont')
inputJs.forEach(item => {
    item.addEventListener('input', () => {
        if (item.children[0].value) {
            item.children[1].className = 'active'
        }
    })
    if (item.children[2]) {
        item.children[2].addEventListener('click', () => {
            console.log('ihui beka ishak')
            if(item.children[0].getAttribute('type') == 'password') {
                item.children[0].setAttribute('type', '')
            }
            else {
                item.children[0].setAttribute('type', 'password')
            }
            item.children[2].children[0].classList.toggle('offImg')
            item.children[2].children[1].classList.toggle('offImg')
        })
    }
    
})