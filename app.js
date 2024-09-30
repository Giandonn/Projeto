function loadComponent(componentPath, containerId) {
    fetch(componentPath)
        .then(response => response.text())
        .then(data => {
            document.getElementById(containerId).innerHTML = data;
        })
        .catch(error => console.error('Erro ao carregar o componente:', error));
}

document.addEventListener('DOMContentLoaded', function () {
    loadComponent('./components/newpriceCard/newpriceCard.html', 'component-container');
});

document.addEventListener('DOMContentLoaded', function () {
    loadComponent('./components/navbar/navbar.html', 'navbar');
});

document.addEventListener('DOMContentLoaded', function () {
    loadComponent('./components/footer/footer.html', 'footer');
});

document.addEventListener('DOMContentLoaded', function () {
    loadComponent('./components/countdownCard/cardCountdown.html', 'countdown');
});

document.addEventListener('DOMContentLoaded', function () {
    loadComponent('./components/rating/cardRating.html', 'rating');
});

document.addEventListener('DOMContentLoaded', function () {
    loadComponent('./components/foneChangeColor/index.html', 'foneChangeColor');
});
