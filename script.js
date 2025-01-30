let inputJs = document.querySelectorAll('.inputCont');

inputJs.forEach(item => {
    let input = item.querySelector('[data-input]');
    let label = item.querySelector('[data-label]');
    let toggle = item.querySelector('[data-toggle]');
    
    if (input) {
        input.addEventListener('input', () => {
            if (input.value) {
                label.classList.add('active');
            } else {
                label.classList.remove('active');
            }
        });
    }

    if (toggle) {
        toggle.addEventListener('click', () => {
            if (input.getAttribute('type') === 'password') {
                input.setAttribute('type', 'text');
            } else {
                input.setAttribute('type', 'password');
            }
            let img1 = toggle.querySelector('[data-img1]');
            let img2 = toggle.querySelector('[data-img2]');
            if (img1 && img2) {
                img1.classList.toggle('offImg');
                img2.classList.toggle('offImg');
            }
        });
    }
});

const checking = () => {
    inputJs.forEach((input) => {
        let inputItem = input.querySelector('[data-input]');
        let errorItem = input.querySelector('[data-error]');
        if (!inputItem || !inputItem.value) {
            if (errorItem) {
                errorItem.classList.add('show')
            }
            if (inputItem) {
                inputItem.classList.add('showInput')
            }   
        }
        else {
            errorItem.classList.remove('show')
            inputItem.classList.remove('showInput')

        }
    })
}

const authorization = () => {
    const inputs = document.querySelectorAll('[data-input]');

    if (Array.from(inputs).every(input => input.value.trim())) {
        window.location.href = '/Onko/html/index.html';
    }
}
//redirect
document.querySelector('.loginForm').addEventListener('submit', e => {
    e.preventDefault();
    checking()
    authorization();
})

//checking

document.querySelector('.loginForm').addEventListener('input', () => {
    checking()
})

