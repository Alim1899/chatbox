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


    class Contact  {
      constructor(firstName, lastName, url){
        this.firstName = firstName;
        this.lastName = lastName;
        this.url = url;
      }
    }



       
//////////////////////////////////////////////////
      //SIGNUP PAGE//
       //SHow/ hide passwords
       const submit = document.querySelector('.submitBtn');
       const eyeIcon = document.querySelectorAll('.eyeIcon');
       const passLabel = document.querySelector('.passwordlabel');
       const showIcon = document.querySelector('.fa-eye');
       const password = document.querySelector('.passwordSign');
       const confirmPassword = document.querySelector('.confirmPassword');
       const showIcon2 = document.querySelector('.showPass');
       showIcon.addEventListener('click', function(){
            
          if(showIcon.classList.toggle('fa-eye')){
            showIcon.classList.add('fa-eye');
            password.type='password';
            confirmPassword.type='password';
          }else{
            showIcon.classList.add('fa-eye-slash');
             password.type='text';
             confirmPassword.type='text';
          }
       })

      
       ///////////////////////////////////////////////////
       

          ///Check passwords matching or not
        const check = function() {  
        const pass = document.querySelector('.passwordSign').value;
        const conPass = document.querySelector('.confirmPassword').value;
        const confirm = document.querySelector('.confirmPassword');
       if(pass.length == 0){
        confirm.style.border = 'none';
          password.style.border = 'none';
          submit.disabled = true;
       }
        if(pass.length>=6){
        if (pass == conPass) {
          
          confirm.style.border = '1px solid green';
          password.style.border = '1px solid green';
          submit.disabled = false;
          submit.style.cursor = 'pointer';
        } else {
            confirm.style.border = '1px solid red';
          password.style.border = '1px solid red';
          submit.disabled = true;
          submit.style.cursor = 'not-allowed';
        }
      }else if(pass.length<6 && pass.length>0){
        confirm.style.border = '1px solid red';
          password.style.border = '1px solid red';
          submit.disabled = true;
          submit.style.cursor = 'not-allowed';
      }
      }
/////////////////////////////////////////////////
     

      
//Save data in localStorage
//////////////////////////////////////////
const getImageUrl = function() {
  const image = document.querySelector('.picture');
  image.addEventListener('change',(e)=>{
    const img = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(img);
    reader.addEventListener('load', () => {
      console.log(reader.result);
      return reader.result;
      });
    })
  };
    
  let url;
  const image = document.querySelector('.picture');
  const urlArr = [];
     image.addEventListener('change',(e)=>{
            const img = e.target.files[0];
            const reader = new FileReader();
            reader.readAsDataURL(img);
            reader.addEventListener('load', () => {             
              urlArr.push(reader.result) 
          })
          })
      
      //Before learning back end - Saving data in to localStorage
      submit.addEventListener('click', function(e){
         
  
        const firstName =  document.querySelector('.userName').value.split(/\s+/).map( s => s.charAt( 0 ).toUpperCase() + s.substring(1).toLowerCase() ).join( " " );
        const lastName = document.querySelector('.userLastname').value.split(/\s+/).map( s => s.charAt( 0 ).toUpperCase() + s.substring(1).toLowerCase() ).join( " " );
       const email = document.querySelector('.email').value.split(/\s+/).map( s => s.toLowerCase()).join('');
       const birthday = document.querySelector('.birthYear').value;
       const password = document.querySelector('.passwordSign').value;
       //Check name field is filled or not
        if(firstName.length<2){
          alert("Please fill name field") ;
        return;
      }
        //Check lastname field is filled or not

        if(lastName.length<2){
          alert("Please fill lastname field"); 
          return;
      }
        //Check email field is filled or not
       if(!document.querySelector('.email').checkValidity())
       {
        alert("Please enter a valid email address");
      return;
    }


     

       class User{
        constructor(firstName,lastName,email,password,url){
          this.firstName = firstName,
      this.lastName = lastName,
      this.email = email,
      this.password = password,
      this.url = urlArr[0]
        }
        
       }
       const newUser = new User(firstName,lastName,email,password,urlArr[0]);
     
      window.localStorage.setItem(`${email}`, JSON.stringify(newUser));
      
      document.querySelector('.login-section').style.visibility = 'visible';
      document.querySelector('.sign-section').style.visibility = 'hidden';
      document.querySelector('.login-section').reload();
  
      })


       //Adding sent messages in to interface
       const messages = [];
       const messageToChat = document.querySelector('.sentMsgToChat');
       messageToChat.addEventListener('click', function(e){
         e.preventDefault();
         const time = new Date();
         let message = document.querySelector('.messageArea').value;
         let startMsg = document.querySelector('.sentMsg-p');
         const msgDiv = document.getElementById('msgList')
        if(startMsg) startMsg.remove();
        messages.push(message);
         if(message.length>0){
 
          const node = document.createElement('li');
         node.classList.add('sentMessage');
         const child = document.createTextNode(`${messages[messages.length-1]}`);
         const timeNode = document.createElement('h6');
         timeNode.classList.add('sentMsgTime');
         const timeNodeChild = document.createTextNode(`${time.getHours()<10?'0'+time.getHours():time.getHours()}:${time.getMinutes()}`)
         timeNode.appendChild(timeNodeChild);
         node.appendChild(child);
         node.appendChild(timeNode)
         
         messages.push(message);
         msgDiv.appendChild(node);
         
         //Received message
         const received = document.createElement('li');
         received.classList.add('recMsg');
         const receivedMessage = document.createTextNode('You received this message automatically');
         const recDate = document.createTextNode(`${time.getHours()<10?'0'+time.getHours():time.getHours()}:${time.getMinutes()<10?'0'+time.getMinutes():time.getMinutes()}`);
         const recTimeNode = document.createElement('h6');
         recTimeNode.classList.add('recDate');
         recTimeNode.appendChild(recDate);
         received.appendChild(recTimeNode);
         received.appendChild(receivedMessage);
         
         
         
         
         msgDiv.appendChild(received);
           
              clearInput("board");
         }else{
             
         }
       })
      
        const lbj = new Contact('LeBron', 'James','https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/LeBron_James_-_51959723161_%28cropped%29.jpg/800px-LeBron_James_-_51959723161_%28cropped%29.jpg');
        const kd = new Contact('Kevin', 'Durant', 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Kevin_Durant_%28Wizards_v._Warriors%2C_1-24-2019%29_%28cropped%29.jpg/800px-Kevin_Durant_%28Wizards_v._Warriors%2C_1-24-2019%29_%28cropped%29.jpg');
        const klaw = new Contact ('Kawhi', 'Leonard','https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/1_kawhi_leonard_2019_%28cropped%29.jpg/800px-1_kawhi_leonard_2019_%28cropped%29.jpg');
        const ad = new Contact('Anthony', 'Davis','https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Anthony_Davis_pre-game_%28cropped%29.jpg/800px-Anthony_Davis_pre-game_%28cropped%29.jpg');
        const cp3 = new Contact('Chris', 'Paul','https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Chris_Paul_%282022_All-Star_Weekend%29_%28cropped%29.jpg/800px-Chris_Paul_%282022_All-Star_Weekend%29_%28cropped%29.jpg');
        const contacts = [lbj, kd, ad, klaw, cp3];
        const renderAccounts = function(){
        const accounts = Object.entries(localStorage);
        accounts.forEach((el)=>{
          const newCont = new Contact(JSON.parse(el[1]).firstName,JSON.parse(el[1]).lastName,JSON.parse(el[1]).url)
          contacts.push(newCont)
        });
       }
       renderAccounts();
  

       //Function for add suggestion from contact list to search-bar

       const addSuggs = function(arr){
        
           arr.forEach(el => suggs.insertAdjacentHTML('afterbegin', `
           <button class="optBtn"><option class="optGroup">${el.firstName} ${el.lastName}</option></button>
           `));
       }
       
           // Function for add contact names from array to interface
         const addName = function(arr){
          const randomImgUrl = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8lCCz3naP8eDnFr476DeuRV8FvxmratoD6q-yuxjKsMu-0DQCKMzH5PeTAk6qB7UyxmE&usqp=CAU';
           arr.forEach(el => {
            if(!el.url){
              contactList.insertAdjacentHTML('afterbegin',`
           <div class='contact'>
           <img class='profilePicture' src='${randomImgUrl}'/>
           <h2 class='name' id='name'>${el.firstName} ${el.lastName}</h2>
           </div>
           `
            )
            }else{
              contactList.insertAdjacentHTML('afterbegin',`
           <div class='contact'>
           <img class='profilePicture' src='${el.url}'/>
           <h2 class='name' id='name'>${el.firstName} ${el.lastName}</h2>
           </div>
           `
            )
            }
            
          }
            );
            contactList.appendChild(endMessage);
       }
           //Calling functions
           addName(contacts);
           addSuggs(contacts);
      
      
      
    ///Code for Chatting page
    const lisst = document.querySelectorAll('.name');
    // Event listener for start messaging with selected contact from contact-list
    lisst.forEach(el => el.addEventListener('click', function (e){
    e.preventDefault()
    firstPage.style.visibility = 'hidden';
        secondPage.style.visibility = 'visible';
          msgContact.textContent = e.target.textContent;
          
          let startMsg = document.querySelector('.sentMsg-p');

          startMsg.textContent = `Sent message  for start conversation with ${e.target.textContent}`
          const img = document.createElement('img');
          img.src = e.target.parentNode.firstChild.nextElementSibling.currentSrc;
         startMsg.appendChild(img)
         img.classList.add('prof');
      }))
      


      //Toggle contacts
      undoBtn.addEventListener('click', function(e){
        firstPage.style.visibility = 'visible';
        secondPage.style.visibility = 'hidden';
        firstPage.classList.remove('hidden');
        secondPage.classList.add('hidden'); 
      })
      
      //Adding eventListenerto log out button
       const logout = document.querySelector('.logout');
       logout.addEventListener('click',function(){
        firstPage.style.visibility = 'hidden';
        document.querySelector('.login-section').style.visibility = 'visible';
        document.querySelector('.loginPassword').value='';
       })
      //Clear input field after sending message
      function clearInput(id){
        document.getElementById(id).reset();
      }

      
     
            // Event listener for start messaging with selected contact from suggestion
    startChat.addEventListener('click', function (e){
      let startMsg = document.querySelector('.sentMsg-p');
      startMsg.textContent='';
      const chatName = document.querySelector('.search').value;
      const contArr =[];
       contacts.forEach(el => contArr.push(el.firstName +' '+ el.lastName))
      if(contArr.includes(chatName)){
        firstPage.style.visibility = 'hidden';
        secondPage.style.visibility = 'visible';
        errorMessage.style.visibility = 'hidden';
        msgContact.textContent = chatName;
      }else if(chatName.length>0){
        errorMessage.textContent = "Please select right contact"
            errorMessage.style.opacity = 1;
            setTimeout(function() {
              errorMessage.textContent = ""
            errorMessage.style.opacity = 1;
            },1000)

    }else{       
        errorMessage.textContent = "Please wright contact name";
        errorMessage.style.visibility = 1;
        setTimeout(function() {
          errorMessage.textContent = ""
        errorMessage.style.opacity = 1;
        },1000)
      }
    })
      
      //////////////////////////////////////////////////


      //////////////////////////////////////////////////

//Code for Login page

  const signupBtn = document.querySelector('.signupBtn');
  const loginBtn = document.querySelector(".loginBtn");
  const loginPass = document.querySelector('.loginPassword');

  //Check password length
const checkLogin = function(){
  if(loginPass.value.length >=6) {
    loginPass.style.border = '1px solid green';
    loginBtn.disabled = false;
    loginBtn.style.cursor = 'pointer';
  }else{
    loginPass.style.border = '1px solid red';
  }
}

//Retrieve data from localStorage  for login
const localUser = Object.entries(localStorage);
const arr = [];
localUser.forEach((el,i)=>arr.push(JSON.parse(el[1])));
let results = [];

const login = function(){
  if(!document.querySelector('#loginMail').checkValidity()){
alert('Please enter a valid email address');
return;
  }
 
  const email = document.querySelector('.loginEmail').value.split(/\s+/).map( s => s.toLowerCase()).join('');
  const password = document.querySelector('.loginPassword').value;
  arr.map(function(el) {
    if(el.email===email && el.password===password) {
      results.push(email);
      results.push(password);
      console.log(results);
  }
    })

    if(results.length!==2){
      alert('Please enter correct account details');
    }else{
      document.querySelector('.list-section').classList.remove('hidden');
      console.log(document.querySelector('.list-section'));
      document.querySelector('.list-section').style.visibility = 'visible';
      document.querySelector('.box').style.visibility = 'visible';
      document.querySelector('.login-section').style.visibility = 'hidden';
      document.querySelector('.sign-section').style.visibility = 'hidden';
      results = [];
    }  
}


loginBtn.addEventListener('click',function(e){
 e.preventDefault();
  login();
})


//Show/hide password in login page
const showLoginPass = document.querySelector('.showLoginPass');
const loginPassword = document.querySelector(".loginPassword");
showLoginPass.addEventListener('click', function(){
            
  if(showLoginPass.classList.toggle('fa-eye')){
    showLoginPass.classList.add('fa-eye');
    loginPassword.type='password';
    
  }else{
    showLoginPass.classList.add('fa-eye-slash');
    loginPassword.type='text';
     
  }
})
//From login to sign up page
 signupBtn.addEventListener('click',function(e){
  e.preventDefault();
  document.querySelector('.login-section').style.visibility = 'hidden';
  document.querySelector('.sign-section').style.visibility = 'visible';
  
})

const fileSize = document.querySelector('#image');
fileSize.addEventListener("change",function(e){
  if((fileSize.files[0].size/1000)>500) {
    alert("Maximum size of image: 500KB")
  fileSize.value = '';
} 
})

