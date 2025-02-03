const grid = document.querySelector('.grid');

let isDown = false;
let startX;
let scrollLeft;

grid.addEventListener('mousedown', (e) => {
    isDown = true;
    grid.classList.add('active');
    startX = e.pageX - grid.offsetLeft;
    scrollLeft = grid.scrollLeft;
});

grid.addEventListener('mouseleave', () => {
    isDown = false;
    grid.classList.remove('active');
});

grid.addEventListener('mouseup', () => {
    isDown = false;
    grid.classList.remove('active');
});

grid.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - grid.offsetLeft;
    const walk = (x - startX) * 2; // Prędkość przewijania
    grid.scrollLeft = scrollLeft - walk;
});
