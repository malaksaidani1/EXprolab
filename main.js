let nav_a_elt = document.querySelectorAll('header nav a');
let menuToggle = document.querySelector('.menu-toggle i'); // Sélectionner l'icône spécifique
let checkbox = document.getElementById('check');

// Événement pour le clic sur le menu-toggle
menuToggle.addEventListener('click', () => {
    if (!checkbox.checked) {
        menuToggle.classList.replace('bx-menu', 'bx-x'); // Remplace le menu par X
    } else {
        menuToggle.classList.replace('bx-x', 'bx-menu'); // Remet X en menu
    }
});

// Fermer le menu après avoir cliqué sur un lien de navigation
nav_a_elt.forEach(item => {
    item.addEventListener('click', () => {
        checkbox.checked = false;
        menuToggle.classList.replace('bx-x', 'bx-menu'); // Remet X en menu après sélection d'un lien
    });
});



document.querySelectorAll('.service-card').forEach(card => {
    const moreText = card.querySelector('.readmore-text');
    const moreBtn = card.querySelector('.readmore-btn');
    const dots = card.querySelector('ul li .dots');

    // Vérifier si les éléments existent avant d'ajouter l'événement
    if (moreText && moreBtn) {
        moreBtn.addEventListener('click', () => {
            // conserver la position initilae du scroller 
            const currentScrollTop = card.querySelector(".service-content").scrollTop;
            card.classList.toggle('more');
            card.querySelector(".service-content").classList.toggle('more');
            if (moreText.classList.contains('readmore-show')) {
                moreText.classList.remove('readmore-show');
                dots.classList.remove('show');
                moreBtn.innerHTML = 'Voir plus...';
            } else {
                moreText.classList.add('readmore-show');
                dots.classList.add('show');
                moreBtn.innerHTML = 'Voir moins...';
            }
        // Pour initialiser le positionement de scroller au debut a chaque fois 
            card.querySelector(".service-content").scrollTop = currentScrollTop;

        });
    }
});


/* 
document.querySelectorAll('.service-card').forEach(card => {
    const moreText = card.querySelector('.readmore-text');
    const moreBtn = card.querySelector('.readmore-btn');
    const serviceContent = card.querySelector('.service-content');

    moreBtn.addEventListener('click', () => {
        if (moreText.style.display === 'inline') {
            moreText.style.display = 'none';
            moreBtn.innerHTML = 'Voir plus...';
            serviceContent.classList.remove('more');
            card.classList.remove('more');
        } else {
            moreText.style.display = 'inline';
            moreBtn.innerHTML = 'Voir moins...';
            serviceContent.classList.add('more');
            card.classList.add('more');
        }
    });
});
 */







