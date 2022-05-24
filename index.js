const input = document.querySelector('.txt-input');
const listItem = document.querySelector('.list-item');
const btnClear = document.querySelector('.btn-clear');


function getList() {
    for(let i = 0; i < localStorage.length; i++){
        let items = document.createElement('li');
        listItem.appendChild(items);
        items.innerText += localStorage.getItem(`input${i}`);
    }
}
getList();


input.addEventListener('keydown',(event)=>{
    if(event.keyCode == 13){
        localStorage.setItem(`input${localStorage.length}`, input.value);
        input.value = '';
    }
});


btnClear.addEventListener('click',()=>{
    localStorage.clear();
});