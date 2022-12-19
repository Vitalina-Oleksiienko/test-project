const dropInput = document.querySelector('button.drop');
const dropList = document.querySelector('ul.drop');
dropInput.addEventListener('focus', show, false);
dropInput.addEventListener('blur', hide, false);
dropList.addEventListener('click', dropSelect, false);

function hide(){
  setTimeout(() =>
    dropList.classList.remove('visible'),
  300);
}
function show(){
  setTimeout(() =>
    dropList.classList.add('visible'),
  300);  
}

function dropSelect(e) {
  dropInput.value = e.target.textContent
  hide();
}

