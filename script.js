const labelReciverName = document.querySelector('.name')
const labelonline = document.querySelector('.online')
const lastSeenTime = document.querySelector('.time')
const labelcurrentUser = document.querySelector('.current--user')
const labelsendText = document.querySelector('.message_sender--content')
const labelreciveText = document.querySelector('.message_reciver-content')
const labelCurrentChat = document.querySelector('.chat--header')

const containerOtherUser = document.querySelector('.contact')
const containerMessage = document.querySelector('.main--chat')
const user = document.querySelectorAll('.user')


const BtnSearch = document.querySelector('.SearchIcon')
const BtnSend = document.querySelector('.Btn--send')
const BtnEmoji = document.querySelector('.Btn--smile')
const BtnFile = document.querySelector('.Btn--file')
const BtnVedio =  document.querySelector('.video--recored')
const blockUser = document.querySelector('.block--user')
const menuBtn = document.querySelector('.menu--Btn')


const InputSearch = document.querySelector('.Search')
let inputMessage = document.querySelector('.text--chat')



const currentUser = document.querySelector('.current--user')
const logIn_logOut = document.querySelector('.login_other--account')
const currentChat = document.querySelector('.current--chat--person')
const accOwner = document.querySelector('.person')

 ////////////////////////////////////////////

 /*
const account1 = {
    name:'Habtemariam Bereket',
    
}
const account2 = {
    name:'Abrham Hode',
}
const account3 = {
    name:'Richard arbara',
}
const account4 = {
    name: 'Sara abera'
}
const accounts = [account1, account2 , account3 ,account4]
*/
////////////////////////////////

//display other accounts
currentUser.addEventListener('click' , function(e) {
    e.preventDefault();
    logIn_logOut.classList.toggle('hidden')
})
let currentName ;
let currentPhoto;
const changeAccountOwner = function(e){
    if(e.target.classList.contains('nameAcc')){
        const link = e.target;
        const siblings = link.closest('.person--other-account').querySelectorAll('.nameAcc')
        const profilePhoto = link.closest('.person--other-account').querySelectorAll('img')
        siblings.forEach(el => {
             currentName = el.getAttribute('data-name')  
        });
        profilePhoto.forEach(imge => {
            currentPhoto = imge.getAttribute('src')
        })
    }
    currentUser.innerHTML = ' ';
    // containerOtherUser.innerHTML = ' ';
    containerMessage.innerHTML = ' ';
    
    
    const profilehtml = `
                    <div class="MyProfile "> 
                        <img src="${currentPhoto}" alt="" class="profile--photo">
                         <p class="name--profile ">${currentName}</p>
                    </div>
    `
    currentUser.insertAdjacentHTML("afterbegin" , profilehtml)
}

logIn_logOut.addEventListener('click', changeAccountOwner)


////change current Chat Person
let currentChatName;
let currentChatPhoto;
const changeCurrentChat = function(e){
    e.preventDefault();
   if(e.target.classList.contains('name')){
   const targetChat = e.target;
   const targetName = targetChat.closest('.cont--nameTime').querySelectorAll('.name')
   const targetPhoto = targetChat.closest('.user').querySelectorAll('img')
   targetName.forEach(cChat => {
       currentChatName = cChat.getAttribute('data-name')
    
   })
   targetPhoto.forEach(tPhot => {
        currentChatPhoto = tPhot.getAttribute('src')
      
   })
     labelCurrentChat.innerHTML = ' ';
     containerMessage.innerHTML = ' ';
   const currentChatHeader = `
   <div class="person person--1 online current--chat--person">
      <img src="${currentChatPhoto}" alt="">
      <div class="cont--nameTime">
      <p class="name-online">${currentChatName}</p>
      <p class="time online--time">online</p>
   </div>
   </div>
    <div class="costomize--option"> 
     <i class="fa-solid fa-video emoji video--recored"></i>
     <i class="fa-solid fa-ban emoji block--user"></i>
     <i class="fa-solid fa-bars emoji menu--Btn"></i>
  </div>
   `
   labelCurrentChat.insertAdjacentHTML('afterbegin', currentChatHeader)
}}
containerOtherUser.addEventListener('click', changeCurrentChat)



//////////////////// Send Button 
let chatHTML;
const SendChat = function(e){
    e.preventDefault();

     

    const mainChat = inputMessage.value;
    
    
     chatHTML = `
    <div class="sender_chat--all">
    <img src="${currentPhoto}" alt="">
    <p class="message_sender--content">${mainChat}</p>
   </div>
    `
    containerMessage.insertAdjacentHTML('beforeend', chatHTML)
    inputMessage.value = ' '
}
BtnSend.addEventListener('click', SendChat)


///////// send the content of message to the reciver

const sendMessage = function(e){
    e.preventDefault();
    reciverAccounts = accounts.find(acc => {
        acc.name == currentName
    })
}