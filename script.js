'use strict'; 

const contactDiv = document.createElement('div');
const contactName = document.createElement('h2');
contactDiv.className = "contact";
contactName.className = 'name';

const contactList = document.querySelector('.contact-list');




    const contact4 = {
        name: 'Jonas Schchmetdmann'
    };
    const contact3 = {
        name : 'Mikheil Margishvili'
    };
    const contact2 = {
        name : 'Mr. Koba Gelashvili'
    };
    const contact1 = {
        name : 'Alim Akhchanogli'
    };

    const contacts = [contact1, contact2, contact3, contact4];
    const addName = function(arr){
        arr.forEach(el => contactList.insertAdjacentHTML('afterbegin',`
        <div class='contact'>
        <h2 class='name' id='name'>${el.name}</h2>
        </div>`
         ));
    }
    addName(contacts);









