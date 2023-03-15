document.getElementById('submit-btn').addEventListener('click', function () {

    const depositField = document.getElementById('deposit-field');
    const depositAmount = depositField.value;

    console.log(depositAmount)


    //get user name

    const depositTotalField = document.getElementById('deposit-total');
    const depositTotal = depositTotalField.innerText;
    const newDeposit = depositAmount + depositTotal;

    depositTotalField.innerText = newDeposit;
       

    depositField.value = '';
    console.log(newDeposit)

})