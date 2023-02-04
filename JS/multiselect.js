let select           = document.getElementById('visible-list-container');
const LIST           = document.getElementById('hidden-list-container');
const IMG            = document.getElementById('logo-expand');

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

toggleMultiSelect(IMG);
toggleMultiSelect(select);
toggleMultiSelect(IMG.parentNode);

document.addEventListener('click', (event)=>{
    console.log(event.target);
    /*if ( !event.target.className.includes('input-group-text') ||
           !event.target.previousElementSibling.className.includes('input-multi-select') ||
           !event.target.previousElementSibling.className.includes('input-group-text') ||
           !event.target.className.includes('input-multi-select') ||
           event.target.id != 'hidden-list-container' ||
           !event.target.firstElementChild.className.includes('input-multi-select') ||
           event.target.id != 'logo-expand-container' ||
           event.target.id != 'logo-expand'
    ){
        if (LIST.classList.contains('hidden-list-container-visible')){
            select.classList.remove('visible-list-container-active');
            LIST.classList.remove('hidden-list-container-visible');
        }
    }*/
});

// Si event.target.className.contains('input-group-text') => gère la div visible-list
// Si event.target.previousElementSibling.className.conatins('input-multi-select') => gère le label des input
// Si event.target.className.contains('input-multi-select') => gère les input
// Si event.target.id === ''hidden-list-container' => gère la div de la liste de choix
// Si event.target.firstElementChild.className.contains('input-multi-select') => gère les <li>