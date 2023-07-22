const { response } = require("express");

// api url
var url = "https://jsonplaceholder.typicode.com/users/1";

// dom
var username = document.querySelector("#username");
var email = document.querySelector("#email");
var address = document.querySelector("#address");

// user data
var user = {};

// adress도 정의해놓기
/** 
 * @typedef {object} Address
 * @property {string} street
 * @property {string} city 
*/

/**    //user타입
 * @typedef {object} User   //타입에 대한 타입 객체 프로퍼티 정의할 수 있음 typedef
 * @property {string} name
 * @property {string} email
 * @property {Address} address
 */

//console말고 js doc으로 확인하기  (/** * */)
/**
 *@returns {Promise<User>}   //{}는 제네릭 (타입이 잘보이게 함)
 */

//하나의 데이터만 받아오기
function fetchUser() {
  return axios.get(url);
}
  // console.log(fetchUser()); // 잘 돌아가나 확인
  // fetchUser().then(function(response)) {}
  

function startApp() {
  // axios
  //   .get(url) //startApp과 동일하게 작용하는 fetchuser
  fetchUser()
    .then(function (response) {
      response.address.city //address에 이미 있는 속성들 city에 만약 오탈자가 난다면 타입스크립트는 미리 걸러줌(지금은 js도구로 사전에 정의해둠)
      console.log(response);
      user = response.data;
      // TODO: 이름, 이메일, 주소 표시하기
      console.log(user);
      username.innerHTML = user[0].name; // 첫번째 유저네임 가져다가 dom에 삽입
      email.innerText = user[0].email;
      address.innerText = user[0].address.street;
    })
    .catch(function (error) {
      console.log(error);
    });
}

startApp();

//////////
// // api url
// var url = "https://jsonplaceholder.typicode.com/users";

// // dom
// var username = document.querySelector("#username");
// var email = document.querySelector("#email");
// var address = document.querySelector("#address");

// // user data
// var user = {};

// function startApp() {
//   axios
//     .get(url)
//     .then(function (response) {
//       console.log(response);
//       user = response.data[0]; // 첫 번째 사용자 정보만 가져오도록 수정
//       displayUserInfo();
//     })
//     .catch(function (error) {
//       console.log(error);
//     });
// }

// function displayUserInfo() {
//   username.innerHTML = user.name;
//   email.innerHTML = user.email;
//   address.innerHTML = user.address.city; // 주소 중 도시 정보만 표시하도록 수정
// }

// // HTML 문서가 로드된 후에 startApp 함수 실행
// document.addEventListener("DOMContentLoaded", startApp);
