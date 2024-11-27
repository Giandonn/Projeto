document.addEventListener('DOMContentLoaded', () => {
    const colorOptions = document.querySelectorAll('.color-option');

    colorOptions.forEach(option => {
        option.addEventListener('click', () => {
            const newImageSrc = option.getAttribute('data-image');

            const productImage = document.getElementById('product-image');
            productImage.src = newImageSrc;
        });
    });
});
