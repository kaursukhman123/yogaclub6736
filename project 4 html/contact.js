document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault(); 
    var name = document.getElementById('name').value;
    var phone = document.getElementById('phone').value;
    var email = document.getElementById('email').value;
    var comments = document.getElementById('comments').value;

    
    alert(
        'Name: ' + name + '\n' +
        'Phone: ' + phone + '\n' +
        'Email: ' + email + '\n' +
        'Comments: ' + comments
    );

});
