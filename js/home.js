document.getElementById('btn-add-money')
.addEventListener('click',function(event){
    event.preventDefault();
    const addMoney=document.getElementById('input-add-money').value;
    const pinNumber=document.getElementById('input-pin-number').value
    // console.log(addMoney,pinNumber);

    if(pinNumber==='1234'){
        console.log('money is added');
        const balance=document.getElementById('account-balance').innerText;
        const addMoneyFinal=Number(addMoney);
        const balanceInput=Number(balance);
        // console.log(typeof addMoneyFinal);
        // console.log(typeof balanceInput);
        const newBalance=addMoneyFinal+balanceInput;
        console.log(newBalance);
        document.getElementById('account-balance').innerText=newBalance;

    }
    else{
        console.log('fail to add money! please try again');
    }
})