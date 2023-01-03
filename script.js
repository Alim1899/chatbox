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
        name: 'Lionel Messi',
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
        name : 'Mustafa Kemal'
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
      
      messageToChat.addEventListener('click', function(){
        const time = new Date()
        let message = document.querySelector('.messageArea').value;
        let startMsg = document.querySelector('.sentMsg-p');
        const msgDiv = document.querySelector('.sentMSG-div');
        console.log(time.getHours());
        startMsg.remove();
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
       const showIcon = document.querySelector('.fa-eye');
       const password = document.querySelector('.password');
       const showIcon2 = document.querySelector('.showPass');
       

       showIcon.addEventListener('click', function(){
            
          if(showIcon.classList.toggle('fa-eye')){
            showIcon.classList.add('fa-eye');
            password.type='password';
          }else{
            showIcon.classList.add('fa-eye-slash');
             password.type='text';
          }
       })

       showIcon2.addEventListener('click', function(){
            const pass = document.querySelector('.loginPassword');
           
        if(showIcon2.classList.toggle('fa-eye')){
          showIcon2.classList.add('fa-eye');
          pass.type='password';
        }else{
          showIcon2.classList.add('fa-eye-slash');
           pass.type='text';
        }
     })
       
       

          ///Check passwords matching or not
        const check = function() {
        const pass = document.querySelector('.password').value;
        const conPass = document.querySelector('.confirmPassword').value;
        const confirm = document.querySelector('.confirmPassword');
       if(pass.length == 0){
        confirm.style.border = 'none';
          password.style.border = 'none';
       }
        if(pass.length>=6){
        if (pass == conPass) {
          
          confirm.style.border = '3px solid green';
          password.style.border = '3px solid green';
          submit.disabled = false;
          submit.style.cursor = 'pointer';
        } else {
            confirm.style.border = '3px solid red';
          password.style.border = '3px solid red';
          submit.disabled = true;
          submit.style.cursor = 'not-allowed';
        }
      }else if(pass.length<6 && pass.length>0){
        confirm.style.border = '3px solid red';
          password.style.border = '3px solid red';
          submit.disabled = true;
          submit.style.cursor = 'not-allowed';
      }
      }

   
     
     
      

       
      //Before creating back end
      submit.addEventListener('click', function(e){
        e.preventDefault();
        
      })



      //Code for Login page
      const login = document.querySelector(".login");
      const signup = document.querySelector('.sign');
      const loginBtn = document.querySelector('.loginBtn');
      const signupBtn = document.querySelector('.signupBtn');
      

      signupBtn.addEventListener('click', function(e){
        e.preventDefault()
        login.style.visibility = "hidden";
        signup.style.visibility = "visible";
      });

      loginBtn.addEventListener('click', function(e){
        e.preventDefault();
        login.style.visibility = 'hidden';
        firstPage.style.visibility = 'visible';
      })

