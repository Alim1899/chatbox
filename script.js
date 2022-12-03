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
        name: 'Harry Maguire'
    }

    const contact5 = {
        name: 'Lionel',
        lastName: 'Messi',
        email: 'lionelMessi@gmail.com',
        password: 'messi123',
        birthday : {
            day: '21',
            month:'02',
            year:'1998'
        }
    }
    const contact4 = {
        name: 'Jonas Schchmetdmann'
    };
    const contact3 = {
        name : 'Mikheil Margishvili'
    };
    const contact2 = {
        name : 'Mr. Suliko Qumaritov'
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




  //////////////////////////////////////////////////
      //SIGNUP PAGE//
      
      
       const submit = document.querySelector('.submitBtn');
       const eyeIcon = document.querySelectorAll('.eyeIcon');
       const passLabel = document.querySelector('.passwordlabel');
       
       //Array for storing new users
       const addContact = [
        //example user
         {
          name:'Alim',
          lastName:'Akhchan',
          email:'example@gmail.com',
        }
       ];

       

       //SHow/ hide passwords
       eyeIcon.forEach(el => el.addEventListener("click", function(e){
        const pass = document.querySelector('.password');
        const conPass = document.querySelector('.confirmPassword')
        const icon = document.querySelector('.hide');
        const icon2 = document.querySelector('.show');
        const margin = document.querySelector('.showHide');
        
        let eye = document.querySelector('.forToggle').textContent;
        if(eye=='Show'){
            document.querySelector(".forToggle").textContent='Hide'
           icon.style.visibility='visible'
           icon2.style.visibility='hidden'
           icon2.style.marginLeft = '-25px';
           let eye = document.querySelector('.forToggle').style.marginLeft='25px'
           conPass.type = 'text';
           pass.type = "text";
        }else{ 
          icon.style.visibility='hidden'
          icon2.style.visibility='visible'
          conPass.type = 'password';
           pass.type = "password";
           icon2.style.marginLeft = '0px';
           let eye = document.querySelector('.forToggle').style.marginLeft='0px'
            document.querySelector(".forToggle").textContent='Show'
        }
        console.log(eye);
       }));
       
          ///Check passwords matching or not
        const check = function() {
        const pass = document.querySelector('.password').value;
        const conPass = document.querySelector('.confirmPassword').value;
        const confirm = document.querySelector('.confirmPassword');
        const password = document.querySelector('.password');
        if(pass.length>=6){
        if (pass == conPass) {
          message.style.color = 'green';
          message.innerHTML = 'matching';
          confirm.style.border = '3px solid green';
          password.style.border = '3px solid green';
          submit.disabled = false;
        } else {
            confirm.style.border = '3px solid red';
          password.style.border = '3px solid red';
          message.style.color = 'red';
          message.innerHTML = 'not matching';
          submit.disabled = true;
        }
      }
      
      }
   
     
     
      

       

      submit.addEventListener('click', function(e){
        e.preventDefault();
        const user = {};
        const userName = document.querySelector(".userName").value; 
          const userLastname = document.querySelector(".userLastname").value;
      const userEmail = document.querySelector(".email").value;
      const userBirthDay = document.querySelector(".birthYear").value;
      const userProfilePicture = document.querySelector('.picture').value;
      const password = document.querySelector(".confirmPassword").value;
        console.log(userName, userLastname, userEmail, userBirthDay, userProfilePicture, password);
        user.name = userName;
        user.lastName = userLastname;
        user.email = userEmail;
        user.birthday = userBirthDay;
        user.profilePicture = userProfilePicture;
        user.password = password;

        console.log(addContact);
        addContact.forEach(el => {
          if(user.email != el.email){
            addContact.push(user);
            console.log(addContact);
          }
        })

      })
      

