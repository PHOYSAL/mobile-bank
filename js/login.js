// console.log('login with js');

document.getElementById('btn-login').addEventListener('click',function(event){
    event.preventDefault();
    // console.log('login button clicked');

    const mobileNumber=document.getElementById('mobile-number').value;
    const pinNumber=document.getElementById('pin-number').value;
    // console.log(mobileNumber,pinNumber);
    if(mobileNumber==='5' && pinNumber==='1234'){
        // console.log('You are logged in');
        window.location.href='/home.html'
    }
    else{
        alert('Wrong phone number or pin');
    }
})