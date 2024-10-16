const searchButton = document.getElementById('search-button');
const searchInput = document.getElementById('search-input');

// Hantera sökningen när knappen klickas
searchButton.addEventListener('click', () => {
    const query = searchInput.value;
    if (query) {
        // Redirecta till en sökmotor
        window.location.href = `https://www.breeze.gl/search?q=${encodeURIComponent(query)}`;
    }
});

// Hantera sökningen när Enter-tangenten trycks
searchInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        const query = searchInput.value;
        if (query) {
            // Redirecta till en sökmotor
            window.location.href = `https://www.breeze.gl/search?q=${encodeURIComponent(query)}`;
        }
    }
});
