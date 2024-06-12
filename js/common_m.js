//데이터베이스 가져오기
const db = firebase.firestore();

/* 마이페이지 버튼 클릭시 사용자 로그인 상태확인 후 페이지 이동 */
$(document).ready(function () {
  $(document).on("click", "#mypageButton", function (event) {
    event.preventDefault();

    checkUserAndRedirect();
  });
});

/* 사용자 로그인 상태 확인 후 페이지 이동 함수 */
function checkUserAndRedirect() {
  var user = localStorage.getItem("user");
  if (user) {
    // 사용자가 로그인된 경우
    window.location.href = "mypageUser_m.html"; // 유저페이지로 이동
  } else {
    // 사용자가 로그아웃된 경우
    window.location.href = "mypageLogin_m.html"; // 로그인 페이지로 이동
  }
}

/* mypageLogin */

//로그인 버튼
$("#login").on("click", function () {
  let loginEmail = $("#loginEmail").val();
  let loginPwd = $("#loginPwd").val();

  firebase
    .auth()
    .signInWithEmailAndPassword(loginEmail, loginPwd)
    .then((result) => {
      //로그인한 사용자의 정보를 로컬 스토리지에 저장
      localStorage.setItem("user", JSON.stringify(result.user));
      //페이지 전환
      window.location.href = "index_m.html";
    });
});

//구글 인증 기능
var provider = new firebase.auth.GoogleAuthProvider();

//구글 인증하기
$("#loginGoogle").on("click", function () {
  firebase
    .auth()
    .signInWithPopup(provider)
    .then(function (result) {
      //var token = result.credential.accessToken;
      var user = result.user;
      localStorage.setItem("user", JSON.stringify(user));
      window.location.href = "index_m.html";
    })
    .catch(function (error) {
      alert("실패사유는 ", error);
    });
});

/* mypageUser */

//유저정보 확인
let localUser = localStorage.getItem("user");

if (localUser) {
  //사용자정보가 있으면 displayName을 표시
  let displayName = JSON.parse(localUser).displayName;
  $("#displayName").text(displayName);
  let email = JSON.parse(localUser).email;
  $("#email").text(email);
  $("#displaySub").text(" 님 반갑습니다.");
}

$("#btnLogout").on("click", function () {
  //로컬스토리에서 사용자 데이터 삭제
  localStorage.removeItem("user");
  alert("로그아웃되었습니다.");
  window.location.href = "index_m.html";
});

/* mypageJoin */

$("#register").on("click", function () {
  let userEmail = $("#email_new").val();
  let userPwd = $("#password_new").val();
  let userName = $("#name_new").val();

  firebase
    .auth()
    .createUserWithEmailAndPassword(userEmail, userPwd)
    .then((result) => {
      console.log(result);
      console.log(result.user);

      // 가입 기능 : 이름 표시
      return result.user.updateProfile({
        displayName: userName,
      });
    })
    .then(() => {
      alert("회원가입이 완료되었습니다.");
      window.location.href = "index_m.html";
    })
    .catch((error) => {
      alert("정보를 다시 입력해주세요.", error);
    });
});
