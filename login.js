// 이메일 입력창
const emailInput = document.getElementById("email");

// 비밀번호 입력창
const passwordInput = document.getElementById("password");

// SIGN IN 버튼
const signInBtn = document.getElementById("signInBtn");

// Sign Up! 버튼
const signUpBtn = document.getElementById("signUpBtn");


// SIGN IN 버튼 클릭
signInBtn.addEventListener("click", function () {

  const email = emailInput.value.trim();
  const password = passwordInput.value.trim();

  // 이메일을 입력하지 않았을 경우
  if (email === "") {
    alert("이메일을 입력해주세요.");
    emailInput.focus();
    return;
  }

  // 비밀번호를 입력하지 않았을 경우
  if (password === "") {
    alert("비밀번호를 입력해주세요.");
    passwordInput.focus();
    return;
  }

  // 아직 다음 페이지가 없기 때문에
  alert("아직 개발이 안되었습니다.");

});


// Sign Up! 클릭
signUpBtn.addEventListener("click", function () {

  window.location.href = "sign.html";

});


// 비밀번호 입력 후 Enter를 눌러도 SIGN IN 실행
passwordInput.addEventListener("keydown", function (event) {

  if (event.key === "Enter") {
    signInBtn.click();
  }

});