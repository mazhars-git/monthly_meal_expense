document.getElementById("btn-submit").addEventListener('click', function(){
    console.log('Clicked btn')

    const userEmail = document.getElementById('user-email');
    const email = userEmail.value;

    const userPassword = document.getElementById('user-password');
    const password = userPassword.value;

    //check valid or invalid
    if (email === 'amarbank@gmail.com' && password === '1234') {
        window.location.href = 'home.html';
    }else{
        console.log('Invalid User')
    }
       
})