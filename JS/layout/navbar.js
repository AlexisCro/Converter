// add class active-link if link in navbar is active. 

let DOMTitle = document.title; 
let navList  = document.getElementById('navlist');

function addActiveLink(collection) {
    Object.values(collection.children).forEach( li => {
        let link            = li.firstElementChild;
        let linkAriaCurrent = li.firstElementChild.attributes['aria-current'].value;
        if ( linkAriaCurrent == DOMTitle ){
            link.classList.add('active-link');
        }
    })
}

addActiveLink(navList);
