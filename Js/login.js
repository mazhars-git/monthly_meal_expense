document.getElementById("btn-submit").addEventListener('click', function(){
    console.log('Clicked btn')

    const userEmail = document.getElementById('user-email');
    const email = userEmail.value;

    const userPassword = document.getElementById('user-password');
    const password = userPassword.value;

    console.log('User:', email, password)
})