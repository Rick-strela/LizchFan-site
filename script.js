document.getElementById('subscribeForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const email = document.getElementById('subscriberEmail').value;
    
    // Здесь добавь код для отправки email на сервер или API почтового сервиса

    alert('Спасибо за подписку!');
});
