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
const account1 = {
    name : 'Abrham Hode',
    lastSeen: 'online',
    photo:'img/person-1.jpg',
    chat:[]
}
const account2 = {
    name : 'Habtemariam',
    lastSeen: '10:20 Am',
    photo:'img/person-4.jfif',
    chat:[]
}
const account3= {
    name : 'Richard arbara',
    lastSeen: 'online',
    photo:'img/person-3.jpg',
    chat:[]
}
const account4 = {
    name : 'sara abera',
    lastSeen: '8:25 Am',
    photo:'img/person-6.webp',
    chat:[]
}
 
const currentUserInfo = {
    name:' ',
    photo: ' ',  
}
const currnetUserChatInfo = {
    name:' ',
    photo:' ',
}

let accounts = [account1, account2 , account3 , account4]

////////////////////////////////

//display other accounts
currentUser.addEventListener('click' , function(e) {
    e.preventDefault();
    logIn_logOut.classList.toggle('hidden')
})

const changeAccountOwner = function(e){
    if(e.target.classList.contains('nameAcc')){
        const link = e.target;
        const siblings = link.closest('.person--other-account').querySelectorAll('.nameAcc')
        const profilePhoto = link.closest('.person--other-account').querySelectorAll('img')
        siblings.forEach(el => {
            currentUserInfo.name = el.getAttribute('data-name')
        });
        profilePhoto.forEach(imge => {
            currentUserInfo.photo = imge.getAttribute('src')
        })
    }
    currentUser.innerHTML = ' ';

    containerMessage.innerHTML = ' ';

    const profilehtml = `
                    <div class="MyProfile "> 
                        <img src="${currentUserInfo.photo}" alt="" class="profile--photo">
                        <p class="name--profile ">${currentUserInfo.name}</p>
                    </div>
    `
    currentUser.insertAdjacentHTML("afterbegin" , profilehtml)
}

///add frist profile 
let firstprofile;
const addFirstProfile = function(){
    firstprofile = `
       <div class="MyProfile "> 
                        <img src=${account4.photo} alt="" class="profile--photo">
                         <p class="name--profile ">${account4.name}</p>
                    </div>
    `
    currentUser.insertAdjacentHTML('afterbegin', firstprofile)
}
addFirstProfile();

/////// other account Display 
let otherAccountHtml;
const DisplayOtherAccount = function(e){
    // e.preventDefault();
    otherAccountHtml = `
    <div class="person user online">
    <img src="img/person-1.jpg" alt="">
    <div class="cont--nameTime">
    <p class="name" data-name = "Abrham Hode">${account1.name}</p>
    <p class="time online--time">${account1.lastSeen}</p>
    </div>
 </div>
 <div class="person user offline">
    <img src="img/person-4.jfif" alt="">
    <div class="cont--nameTime">
    <p class="name" data-name="Habtemariam">${account2.name}</p>
    <p class="time">${account2.lastSeen}</p>
   </div>
 </div>
 <div class="person user online">
    <img src="img/person-3.jpg" alt="">
    <div class="cont--nameTime">
    <p class="name" data-name="Richard arbara">${account3.name}</p>
    <p class="time online--time">${account3.lastSeen}</p>
    </div>
 </div>
 <div class="person user offline">
    <img src="img/person-6.webp" alt="">
    <div class="cont--nameTime">
    <p class="name" data-name="Sara Abera">${account4.name}</p>
    <p class="time">${account4.lastSeen}</p>
    </div>
 </div>
    `
    containerOtherUser.insertAdjacentHTML('afterbegin', otherAccountHtml)
}

DisplayOtherAccount();
////////Display Current USER
let currentUserHtml;
const displayCurrentUser = function(){

    currentUserHtml = `
       <div class="person person--other-account">
    <img src=${account3.photo} alt="">
    <p class="name name--login nameAcc" data-name="Richard arbara">${account3.name}</p>
 </div>
<div class="person   person--other-account">
<img src=${account2.photo} alt="">
<p class="name name--login nameAcc" data-name = "Habtemariam">${account2.name}</p>
</div>
<div class="person  person--other-account">
<img src=${account1.photo} alt="">
<p class="name name--login nameAcc" data-name = "Abrham Hode">${account1.name}</p>
</div>
<div class="person  person--other-account">
<img src=${account4.photo} alt="">
<p class="name name--login nameAcc" data-name = "sara abera">${account4.name}</p>
</div>
    `
    logIn_logOut.insertAdjacentHTML('afterbegin' , currentUserHtml)
}
displayCurrentUser();
//////
let reciverAccountname;
let reciverAccountPhoto;
let currentUserName;
let currentUserphoto;

const currentbetweenChat = function(){
    reciverAccountname = currnetUserChatInfo.name.trim() ? currnetUserChatInfo.name : 'Abreham Hode';
   reciverAccountPhoto = currnetUserChatInfo.photo.trim() ? currnetUserChatInfo.photo :'img/ person-1.jpg';
   currentUserName = currentUserInfo.name.trim() ? currentUserInfo.name: 'sara abera'; 
   currentUserphoto = currentUserInfo.photo.trim()? currentUserInfo.photo:'img/person-6.webp';
}

//////////////////// Send Button 
let chatHTML;
let mainChat;
let sendMessage = function(e){
    // e.preventDefault();
     mainChat = inputMessage.value;
    
     chatHTML = `
    <div class="sender_chat--all">
    <img src="${currentUserphoto}" alt="">
    <p class="message_sender--content">${mainChat}</p>
   </div>
    `
    containerMessage.insertAdjacentHTML('beforeend', chatHTML)
    inputMessage.value = ' '
}

//////////////////

let senderAccount;


const senderAccountFunc = function(){
    senderAccount = currentUserphoto;
}
////send chat
let currrentSenderName;
let currentReciverName;
BtnSend.addEventListener('click',  function () {
        currrentSenderName = currentUserName;
       currentReciverName = reciverAccountname;
        senderAccountFunc();
        sendMessage();
})
inputMessage.addEventListener('keydown', function (event) {

    if (event.key === 'Enter') {
        currentbetweenChat();
        currrentSenderName = currentUserName;
       currentReciverName = reciverAccountname;
        senderAccountFunc();
        sendMessage();
    }
});

////////current  Chat Header
const currentChatHeader = function(e){
    // e.preventDefault();
    headerChatHtml = `
             <div class="person person--1 online current--chat--person">
                   <img src="img/person-1.jpg" alt="">
                   <div class="cont--nameTime">
                   <p class="name-online">${account1.name}</p>
                   <p class="time online--time">${account1.lastSeen}</p>
           </div>
         </div>
    `
    labelCurrentChat.insertAdjacentHTML('afterbegin' , headerChatHtml)
}
currentChatHeader();

///////// reciveMessage;
let reciverMessage = function(e){
    reciverChat = `
    <div class="reciver_chat--all">
    <p class="message_reciver-content">${mainChat}</p>
    <img src="${senderAccount}" alt="">
   </div>
    `
    containerMessage.insertAdjacentHTML('beforeend', reciverChat)
}

logIn_logOut.addEventListener('click', function(e){
     changeAccountOwner(e);
     currentbetweenChat();
})
////change current Chat Person

const changeCurrentChat = function(e){
    e.preventDefault();
   if(e.target.classList.contains('name')){
   const targetChat = e.target;
   const targetName = targetChat.closest('.cont--nameTime').querySelectorAll('.name')
   const targetPhoto = targetChat.closest('.user').querySelectorAll('img')
   targetName.forEach(cChat => {
    currnetUserChatInfo.name = cChat.getAttribute('data-name')
   })
   targetPhoto.forEach(tPhot => {
    currnetUserChatInfo.photo = tPhot.getAttribute('src')
   })
   updateCurentChatUser();
}}

const updateCurentChatUser = function(e){

    labelCurrentChat.innerHTML = ' ';
    containerMessage.innerHTML = ' ';
  const currentChatHeader = `
  <div class="person person--1 online current--chat--person">
     <img src="${currnetUserChatInfo.photo}" alt="">
     <div class="cont--nameTime">
     <p class="name-online">${currnetUserChatInfo.name}</p>
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
}
// && reciverAccountname == currrentSenderName
containerOtherUser.addEventListener('click', function(e){
    changeCurrentChat(e);
    currentbetweenChat()
 if(inputMessage.value !== '' && currentReciverName == currentUserName && currrentSenderName == reciverAccountname){
    reciverMessage();
 }
})


