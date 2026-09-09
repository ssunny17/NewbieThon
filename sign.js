// 입력창
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const confirmPasswordInput = document.getElementById("confirmPassword");

// 버튼
const createBtn = document.getElementById("createBtn");
const signInBtn = document.getElementById("signInBtn");


// CREATE 버튼 클릭
createBtn.addEventListener("click", function () {

  const email = emailInput.value.trim();
  const password = passwordInput.value.trim();
  const confirmPassword = confirmPasswordInput.value.trim();

  // 이메일을 입력하지 않았을 때
  if (email === "") {
    alert("이메일을 입력해주세요.");
    emailInput.focus();
    return;
  }

  // 비밀번호를 입력하지 않았을 때
  if (password === "") {
    alert("비밀번호를 입력해주세요.");
    passwordInput.focus();
    return;
  }

  // 비밀번호 확인을 입력하지 않았을 때
  if (confirmPassword === "") {
    alert("비밀번호를 다시 입력해주세요.");
    confirmPasswordInput.focus();
    return;
  }

  // 비밀번호가 서로 다를 때
  if (password !== confirmPassword) {
    alert("비밀번호가 일치하지 않습니다.");
    confirmPasswordInput.focus();
    return;
  }

  // 계정 생성 완료
  alert("계정이 생성되었습니다.");

  // 로그인 화면으로 이동
  window.location.href = "index.html";
});


// 하단 Sign In! 클릭
signInBtn.addEventListener("click", function () {

  // 로그인 화면으로 이동
  window.location.href = "index.html";

});


// Confirm Password에서 Enter를 눌러도 CREATE 실행
confirmPasswordInput.addEventListener("keydown", function (event) {

  if (event.key === "Enter") {
    createBtn.click();
  }

});