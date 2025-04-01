// Favorite button
const favoriteBtn = document.querySelector('.favorite-btn');
favoriteBtn.addEventListener('click', function () {
    this.classList.toggle('active');
    const icon = this.querySelector('i');
    if (this.classList.contains('active')) {
        icon.classList.remove('far');
        icon.classList.add('fas');
    } else {
        icon.classList.remove('fas');
        icon.classList.add('far');
    }
});

// Card favorite buttons
const cardFavoriteBtns = document.querySelectorAll('.icones .fa-heart');
cardFavoriteBtns.forEach(icon => {
    icon.addEventListener('click', function () {
        if (this.classList.contains('far')) {
            this.classList.remove('far');
            this.classList.add('fas');
        } else {
            this.classList.remove('fas');
            this.classList.add('far');
        }
    });
});

// Tabs
const tabBtns = document.querySelectorAll('.tab-btn');
const tabPanes = document.querySelectorAll('.tab-pane');

tabBtns.forEach(btn => {
    btn.addEventListener('click', function () {
        // Remove active class from all buttons and panes
        tabBtns.forEach(b => b.classList.remove('active'));
        tabPanes.forEach(p => p.classList.remove('active'));

        // Add active class to clicked button and corresponding pane
        this.classList.add('active');
        const tabId = this.getAttribute('data-tab');
        document.getElementById(tabId).classList.add('active');

        // Load feedback if feedback tab is clicked
        if (tabId === 'feedback') {
            loadFeedback();
        }
    });
});

// Mock feedback data
const mockFeedback = [
    {
        name: 'Ana Silva',
        rating: 5,
        date: '2023-10-15',
        comment: 'Meu filho adorou! Ótima qualidade e muito resistente. Recomendo para todas as idades.'
    },
    {
        name: 'Carlos Oliveira',
        rating: 4,
        date: '2023-09-28',
        comment: 'Produto bom, mas a montagem foi um pouco complicada. Depois de montado, as crianças não saem de cima.'
    },
    {
        name: 'Mariana Costa',
        rating: 5,
        date: '2023-09-10',
        comment: 'Excelente brinquedo para desenvolvimento motor. Minha filha de 3 anos brinca todos os dias.'
    },
    {
        name: 'Pedro Santos',
        rating: 5,
        date: '2023-08-22',
        comment: 'Comprei para meu sobrinho e ele adora! A estrutura é bem firme e segura.'
    },
    {
        name: 'Juliana Mendes',
        rating: 4,
        date: '2023-08-05',
        comment: 'Ótimo custo-benefício. As crianças se divertem muito e ajuda no desenvolvimento físico.'
    }
];

// Load feedback
function loadFeedback() {
    const feedbackList = document.querySelector('.feedback-list');

    // Clear existing feedback
    feedbackList.innerHTML = '';

    // Add feedback to the list
    mockFeedback.forEach(feedback => {
        addFeedback(feedback);
    });
}

// Add a feedback to the list
function addFeedback(feedback) {
    const feedbackList = document.querySelector('.feedback-list');

    const feedbackItem = document.createElement('div');
    feedbackItem.className = 'feedback-item';

    const feedbackHeader = document.createElement('div');
    feedbackHeader.className = 'feedback-header';

    const userName = document.createElement('div');
    userName.className = 'user-name';
    userName.textContent = feedback.name;

    const feedbackDate = document.createElement('div');
    feedbackDate.className = 'feedback-date';
    feedbackDate.textContent = formatDate(feedback.date);

    feedbackHeader.appendChild(userName);
    feedbackHeader.appendChild(feedbackDate);

    const starRating = document.createElement('div');
    starRating.className = 'star-rating';

    for (let i = 1; i <= 5; i++) {
        const star = document.createElement('i');
        star.className = i <= feedback.rating ? 'fas fa-star' : 'far fa-star';
        starRating.appendChild(star);
    }

    const feedbackText = document.createElement('div');
    feedbackText.className = 'feedback-text';
    feedbackText.textContent = feedback.comment;

    feedbackItem.appendChild(feedbackHeader);
    feedbackItem.appendChild(starRating);
    feedbackItem.appendChild(feedbackText);

    feedbackList.appendChild(feedbackItem);
}

// Format date
function formatDate(dateString) {
    const options = { year: 'numeric', month: 'numeric', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('pt-BR', options);
}

// Quick view functionality for product cards
const quickViewBtns = document.querySelectorAll('.view-product');
quickViewBtns.forEach(btn => {
    btn.addEventListener('click', function () {
        // In a real application, this would open a modal with product details
        alert('Visualização rápida do produto');
    });
});