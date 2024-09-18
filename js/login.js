// console.log('login with js');

document.getElementById('btn-login').addEventListener('click',function(event){
    event.preventDefault();
    console.log('login button clicked');

    const mobileNumber=document.getElementById('mobile-number').value;
    console.log(mobileNumber);
})