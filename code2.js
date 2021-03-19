let home = document.querySelector('.home1');
let shop = document.querySelector('.shop');
let contact = document.querySelector('.contact');
let about = document.querySelector('.about');
let change = document.querySelector('.change');
let radio = document.querySelector('.radio');

function result() {
    if(document.getElementById("us").checked) {
        home.textContent ='HOME'; 
        shop.textContent = 'SHOP';
        contact.textContent ='CONTACT'; 
        about.textContent = 'ABOUT US';
    } if(document.getElementById("ua").checked){
        home.textContent ='ДОДОМУ'; 
        shop.textContent = 'МАГАЗИН';
        contact.textContent ='КОНТАКТИ'; 
        about.textContent = 'ПРО НАС';
    }
}

radio.addEventListener('click', result)