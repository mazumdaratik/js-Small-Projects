let toastBox = document.getElementById('toast-box');
let succesMsg = '<i class="ri-checkbox-circle-fill"></i> Successfully Submitted';
let errorMsg = '<i class="ri-close-line"></i> Please, check the error!';
let invalidMsg = '<i class="ri-error-warning-line"></i> Invalid input, Check Again.';

function showToast(msg){
    let toast = document.createElement('div');
    toast.classList.add('toast');
    toast.innerHTML = msg;
    toastBox.appendChild(toast);

    if(msg.includes('error')){
        toast.classList.add('error');
    }
    if(msg.includes('Invalid')){
        toast.classList.add('invalid');
    }

    setTimeout( () => {
        toast.remove();
    }, 5000);

}