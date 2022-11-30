'use strict'; 
//Code for contact list page
//HTML elements
const contactDiv = document.createElement('div');
const contactName = document.createElement('h2');
const contactList = document.querySelector('.contact-list');
const suggs = document.querySelector(".suggs");
contactDiv.className = "contact";
contactName.className = 'name';
const endMessage = document.createElement("h3");
endMessage.className = 'endMsg';
    endMessage.textContent = "End of the list";


    const contact6 = {
        name: 'Murmana Zedubneli'
    }

    const contact5 = {
        name: 'Jumbera Qvedubneli'
    }
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
    const contacts = [contact1, contact2, contact3, contact4, contact5, contact6];

    const addSuggs = function(arr){
        arr.forEach(el => suggs.insertAdjacentHTML('afterbegin', `
        <option>${el.name} <button class='sendMsg'>💬</button></option>
        `));
    }
    addSuggs(contacts);

    console.log(suggs);

    const addName = function(arr){
        arr.forEach(el => contactList.insertAdjacentHTML('afterbegin',`
        <div class='contact'>
        <h2 class='name' id='name'>${el.name}</h2>
        </div>
        `
        
         ));
         contactList.appendChild(endMessage);
    }
    addName(contacts);

    








