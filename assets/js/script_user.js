
// 헤드메뉴
document.addEventListener('DOMContentLoaded', function() {
  const buttons = document.querySelectorAll('.allMenu');
  buttons.forEach(button => {
    button.addEventListener('click', function() {
      this.classList.toggle('on');
    });
  });
});



// 회원가입단 
document.addEventListener('DOMContentLoaded', function() {
    // 첫번쨰 패스워드 입력 값 채워질 시 두번쨰 패스워드 인풋 활성화
    const firstPw = document.querySelector('.inputBox input[type="password"]:not(.pwCheck)');
    const secondPw = document.querySelector('input.pwCheck');

    if (firstPw && secondPw) {
        firstPw.addEventListener('input', function() {
            if (this.value.length > 0) {
                secondPw.disabled = false;
                secondPw.removeAttribute('disabled');
            } else {
                secondPw.disabled = true;
                secondPw.setAttribute('disabled', 'disabled');
                secondPw.value = ""; // 첫 번째 칸 비우면 두 번째도 초기화
            }
        });
    }

    // 패스워드 *가 아닌 문자열로 보기.
    const eyeBtns = document.querySelectorAll('.inputBtn.eye');
    eyeBtns.forEach(function(btn) {
        btn.addEventListener('click', function() {
            const targetInput = this.previousElementSibling;
            if (targetInput && targetInput.tagName === 'INPUT') {
                if (targetInput.type === "password") {
                    targetInput.type = "text";
                    this.textContent = "숨기기";
                } else {
                    targetInput.type = "password";
                    this.textContent = "보기";
                }
            }
        });
    });
});