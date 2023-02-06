let select           = document.getElementById('visible-list-container');
const listContainer  = document.getElementById('hidden-list-container');
const img            = document.getElementById('logo-expand');
const main           = document.querySelector('main');
let   choiceList     = document.getElementById('hidden-list').children;

function toggleMultiSelect(element) {
    element.addEventListener('click', ()=>{
        if ( !select.classList.contains('visible-list-container-active') && !listContainer.classList.contains('hidden-list-container-visible')){
            select.classList.add('visible-list-container-active');
            listContainer.classList.add('hidden-list-container-visible');    
        }else if (select.classList.contains('visible-list-container-active') && listContainer.classList.contains('hidden-list-container-visible')){
            select.classList.remove('visible-list-container-active');
            listContainer.classList.remove('hidden-list-container-visible');
        }
        
    });
}

function closeMultiSelect(element) {
    console.log(element);
    if (element.parentNode.id == 'multi-select'){
        return false;
    }else if (element.parentNode.id != 'multi-select' && element != main){
        element = element.parentNode;
        closeMultiSelect(element);
    }else if (element == main){
        if (listContainer.classList.contains('hidden-list-container-visible')){
            select.classList.remove('visible-list-container-active');
            listContainer.classList.remove('hidden-list-container-visible');
        }
    }
}

function isChecked(elements) {
    for(li in elements){
        let child = elements[li];
        if (child.tagName == "LI"){
            child = child.children;
            console.log(child);
            for(input in child){
                let checkbox = child[input];
                if ( checkbox.type == "checkbox"){
                    if ( checkbox.checked ){
                        console.log(`${checkbox} is true`);
                    }
                }
            }
        }
    }
}

toggleMultiSelect(img);
toggleMultiSelect(select);
toggleMultiSelect(img.parentNode);

document.addEventListener('click', (click)=>{
    target = click.target;
    closeMultiSelect(target);
    isChecked(choiceList);
})
