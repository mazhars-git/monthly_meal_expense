document.getElementById('submit-data').addEventListener('click', function (e) {
    e.preventDefault();
    console.log('clicked in data submission')
    const name = document.getElementById('user-name');
    const user = name.value;


    //get user name

    const userName = document.getElementById('set-name');
    const userField = userName.innerText;
    userName.innerText = user;

    console.log()

})