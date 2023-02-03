let select           = document.getElementById('visible-list-container');
const LIST           = document.getElementById('hidden-list-container');
const IMG            = document.getElementById('logo-expand');
let inputMultiSelect = LIST.querySelectorAll('.input-multi-select');

function activeMultiSelect(element){
    element.addEventListener('click', ()=>{
        if ( !select.classList.contains('visible-list-container-active') && !LIST.classList.contains('hidden-list-container-visible')){
            select.classList.add('visible-list-container-active');
            LIST.classList.add('hidden-list-container-visible');    
        }else if (select.classList.contains('visible-list-container-active') && LIST.classList.contains('hidden-list-container-visible')){
            select.classList.remove('visible-list-container-active');
            LIST.classList.remove('hidden-list-container-visible');
        }
        
    });
}

activeMultiSelect(IMG);
activeMultiSelect(select);
activeMultiSelect(IMG.parentNode);

document.addEventListener('click', (event)=>{
    console.log(event.target);
    /*if ( event.target.parentNode.id != 'multi-select'){
        if (LIST.classList.contains('hidden-list-container-visible')){
            select.classList.remove('visible-list-container-active');
            LIST.classList.remove('hidden-list-container-visible');
        }
    }*/
});