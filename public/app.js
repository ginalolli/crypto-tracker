document.addEventListener('DOMContentLoaded', () => {
    const API_URL = 'http://localhost:3000/crypto';
    const container = document.getElementById('crypto-container');
    const refreshBtn = document.getElementById('refresh-btn');

    function formatPrice(price) {
        return price.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    function fetchData() {
        container.innerHTML = 'Loading...';

        fetch(API_URL)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                container.innerHTML = '';
                data.data.forEach(crypto => {
                    const cryptoElement = document.createElement('div');
                    cryptoElement.className = 'crypto-item';
                    cryptoElement.innerHTML = `<strong>${crypto.name}</strong>: $${formatPrice(crypto.quote.USD.price)}`;
                    container.appendChild(cryptoElement);
                });
            })
            .catch(error => {
                container.innerHTML = 'Error fetching data.';
                console.error('Error fetching data:', error);
            });
    }

    refreshBtn.addEventListener('click', fetchData);
    fetchData();
});
