
const loginInput = document.querySelector("#login-form input");

const loginForm = document.querySelector("#login-form");
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {

   

  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);                // 로그인폼 안보이게 변경
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);             // localStorage에 키 , 이름정보 추가
  paintGreetings(username);                                 // input으로부터 유저정보 받아서 username임
}

const link = document.querySelector("a");

function handleLinkClick(event){
    event.preventDefault();
    console.dir(event);
}   // 클릭시 동작제어 이벤트 함수


const greeting = document.querySelector("#greeting");




function paintGreetings(username) {
    greeting.innerText = `Hello ${username} :)`;           // h1에 hello + input값 텍스트 추가
    greeting.classList.remove(HIDDEN_CLASSNAME);        // h1에 hidden 클래스 삭제하여 텍스트 보이게
}    


const savedUsername = localStorage.getItem(USERNAME_KEY);


if(savedUsername === null) {
    //show the form
    loginForm.classList.remove(HIDDEN_CLASSNAME);            //로그인폼 hidden 클래스 삭제해서 보이게
    loginForm.addEventListener("submit", onLoginSubmit);     //이벤트가 전송 기다리고 전송되면, onLoginSubmit 함수 실행
} else {
    //show the greetings
    paintGreetings(savedUsername);                          //local storage로부터 유저정보 받아서 savedUsername임
}

