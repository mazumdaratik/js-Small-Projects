var selectedField = document.getElementById('selectedField');
var selectText = document.getElementById('selectText');
var options = document.getElementsByClassName('options');
var list = document.getElementById('list');
var arrowRotate = document.getElementById('arrowRotate');

selectedField.onclick = function(){
    list.classList.toggle('hide');
    arrowRotate.classList.toggle('rotate');
}

for(option of options){
    option.onclick = function(){
        selectText.innerHTML = this.textContent;
        list.classList.toggle('hide');
        arrowRotate.classList.toggle('rotate');
    }
}