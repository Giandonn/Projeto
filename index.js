document.addEventListener('DOMContentLoaded', () => {
    const pinkImg = document.querySelector('.headphone-img.pink');
    const redImg = document.querySelector('.headphone-img.red');
    const colorBtns = document.querySelectorAll('.color-btn');

    colorBtns.forEach(button => {
        button.addEventListener('click', () => {
            const selectedColor = button.getAttribute('data-img');

            if (selectedColor === 'midia/red.png') {
                pinkImg.style.transform = 'translateY(0)';
                redImg.style.transform = 'translateY(100%)';
            } else {
                pinkImg.style.transform = 'translateY(-100%)';
                redImg.style.transform = 'translateY(0)';
            }

            colorBtns.forEach(btn => btn.classList.remove('selected'));
            button.classList.add('selected');
        });
    });
});
