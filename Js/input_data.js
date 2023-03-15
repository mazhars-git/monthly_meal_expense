document.getElementById('submit-btn').addEventListener('click', function () {

    const depositField = document.getElementById('deposit-field');
    const depositAmountStr = depositField.value;
    const depositAmount = parseFloat(depositAmountStr);



    console.log(depositAmount)


    //get user name

    const depositTotalField = document.getElementById('deposit-total');
    const previousDepositStr = depositTotalField.innerText;
    const previousDeposit = parseFloat(previousDepositStr);
    const currentDeposit = depositAmount + previousDeposit;

    depositTotalField.innerText = currentDeposit;
       

    depositField.value = '';

})