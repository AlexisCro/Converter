let select           = document.getElementById('visible-list-container');
const LIST           = document.getElementById('hidden-list-container');
const IMG            = document.getElementById('logo-expand');
const MAIN           = document.querySelector('main');

function toggleMultiSelect(element){
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

function closeMultiSelect(element) {
    console.log(element);
    if (element.parentNode.id == 'multi-select'){
        return false;
    }else if (element.parentNode.id != 'multi-select' && element != MAIN){
        element = element.parentNode;
        closeMultiSelect(element);
    }else if (element == MAIN){
        if (LIST.classList.contains('hidden-list-container-visible')){
            select.classList.remove('visible-list-container-active');
            LIST.classList.remove('hidden-list-container-visible');
        }
    }
}

toggleMultiSelect(IMG);
toggleMultiSelect(select);
toggleMultiSelect(IMG.parentNode);

document.addEventListener('click', (click)=>{
    target = click.target;
    closeMultiSelect(target);
})
