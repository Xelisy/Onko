// document.addEventListener('DOMContentLoaded', () => {
//     const buttons = document.querySelectorAll('button');

//     function materializeEffect(event) {
//       const circle = document.createElement('div');
//       const rect = event.currentTarget.getBoundingClientRect();
//       const x = event.clientX - rect.left;
//       const y = event.clientY - rect.top;

//       circle.classList.add('circle');
//       circle.style.left = `${x}px`;
//       circle.style.top = `${y}px`;
//       event.currentTarget.appendChild(circle);

//       setTimeout(() => circle.remove(), 500);
    
//     setTimeout(() => {
//         window.location.href = 'login.html'
//         }, 300)
//     }

//     buttons.forEach(button => {
//         button.addEventListener('click', materializeEffect); 
//     });
// });