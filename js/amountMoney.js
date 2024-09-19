document.getElementById('btn-add-money').addEventListener('click',function(event) {
    event.preventDefault();
    const addMoney=document.getElementById('input-add-money').value;
    const pinNumber=document.getElementById('input-pin-number').value;
    
    if(pinNumber==='1234'){
        const balance=document.getElementById('account-balance').innerText;
        const numberAddMoney=Number(addMoney);
        const numberBalance=Number(balance);
        const newBalance=numberAddMoney+numberBalance;
        console.log(newBalance);
        document.getElementById('account-balance').innerText=newBalance;

    }
    else{
        alert('wrong pin number! please try again');
    }
})