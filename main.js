//sections
let currentIndex = 0;


const sections = document.querySelectorAll('.mainContainer');

// Проверка: есть ли хотя бы одна секция
if (sections.length === 0) {
    console.error("Нет секций с классом .mainContainer");
}

function activateSection(index) {
    if (index < 0 || index >= sections.length) return;

    sections.forEach((section, i) => {
        if (i === index) {
            section.classList.add('active'); 
        } else {
            section.classList.remove('active'); 
        }
    });
}

activateSection(currentIndex);

window.addEventListener('wheel', (event) => {
    if (event.deltaY > 0 && currentIndex < sections.length - 1) {
        console.log('gg')
        
        currentIndex++;
    } else if (event.deltaY < 0 && currentIndex > 0) {
        
        currentIndex--;
    }
    activateSection(currentIndex); 
});

//mobile
let startTouchY = 0;

document.addEventListener('touchstart', (event) => {
    startTouchY = event.touches[0].clientY; // 
});

document.addEventListener('touchend', (event) => {
    const endTouchY = event.changedTouches[0].clientY; 
    if (startTouchY - endTouchY > 50 && currentIndex < sections.length - 1) {
        currentIndex++;
    } else if (endTouchY - startTouchY > 50 && currentIndex > 0) {
        currentIndex--;
    }
    activateSection(currentIndex); 
});