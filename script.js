'use strict'; 
//Code for contact list page
//HTML elements
const firstPage = document.querySelector(".box");
const secondPage = document.querySelector(".chat");
const contactDiv = document.createElement('div');
const contactName = document.createElement('h2');
const contactList = document.querySelector('.contact-list');
const suggs = document.querySelector(".suggs");
const errorMessage = document.querySelector('.errorMsg');
contactDiv.className = "contact";
contactName.className = 'name';
const endMessage = document.createElement("h3");
    endMessage.className = 'endMsg';
    endMessage.textContent = "End of the list";
    
const startChat = document.querySelector('.sendBtn');  
const list2 = document.querySelectorAll('.name');
const msgContact = document.querySelector('.contact-name');
const undoBtn = document.querySelector(".btn-exit");
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
          
    //Function for add suggestion from contact list to search-bar
    const addSuggs = function(arr){
        arr.forEach(el => suggs.insertAdjacentHTML('afterbegin', `
        <button class="optBtn"><option class="optGroup">${el.name}</option></button>
        `));
    }
    

        // Function for add contact names from array to interface
    const addName = function(arr){
        arr.forEach(el => contactList.insertAdjacentHTML('afterbegin',`
        <div class='contact'>
        <h2 class='name' id='name'>${el.name}</h2>
        </div>
        `
        
         ));
         contactList.appendChild(endMessage);
    }
        //Calling functions
        addName(contacts);
        addSuggs(contacts);


    ///Code for Chatting page
    

    
    // Event listener for start messaging with selected contact from suggestion
    startChat.addEventListener('click', function (e){
      const chatName = document.querySelector('.search').value;
      const contArr =[];
       contacts.forEach(el => contArr.push(el.name))
      
      if(contArr.includes(chatName)){
        firstPage.style.visibility = 'hidden';
        secondPage.style.visibility = 'visible';
        errorMessage.style.visibility = 'hidden';
        msgContact.textContent = chatName;
      }else if(chatName.length>0){
        errorMessage.textContent = "Please select right contact"
            errorMessage.style.opacity = 1;

    }else{       
        errorMessage.textContent = "Please wright contact name"
        errorMessage.style.visibility = 1;
      }
    })
    

    const lisst = document.querySelectorAll('.name');
    // Event listener for start messaging with selected contact from contact-list

    lisst.forEach(el => el.addEventListener('click', function (e){
         
         firstPage.style.visibility = 'hidden';
        secondPage.style.visibility = 'visible';
          msgContact.textContent = e.target.textContent;
      }))

      undoBtn.addEventListener('click', function(e){
        firstPage.style.visibility = 'visible';
        secondPage.style.visibility = 'hidden';
      })
      
      function clearInput(id){
        document.getElementById(id).reset();
      }

      const messageToChat = document.querySelector('.sentMsgToChat');
      console.log(messageToChat);
      messageToChat.addEventListener('click', function(e){
        let message = document.querySelector('.messageArea').value;
        const msgDiv = document.querySelector('.sentMSG-div');
        console.log(message);
        console.log(msgDiv);
        if(message.length>0){
            msgDiv.insertAdjacentHTML("afterbegin",`
            <p class="sentMsg-p">${message}</p>
            `);
             clearInput("board")
        }else{
            console.log(message);
        }
      })



