

document.getElementById('yes-btn').addEventListener('click', function() {
    document.getElementById('message').innerText = 'Haha, I knew it! I love you more than anything!';
    document.getElementById('image-container').innerHTML = '<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxJMFQgsJseKgGnT5x3yn3A-2CVSybNWwIYQ&s" alt="Love Image" class="fade-in">';
    setTimeout(function() {
        window.location.href = 'surprise.html';
    }, 3000);
});

document.getElementById('no-btn').addEventListener('click', function() {
    document.getElementById('message').innerText = 'Haha, you are mine! 😘';
    document.getElementById('image-container').innerHTML = '<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxJMFQgsJseKgGnT5x3yn3A-2CVSybNWwIYQ&s" alt="Love Image" class="fade-in">';
});
