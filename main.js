// 다크/라이트 모드 전환
function toggleMode() {
    document.body.classList.toggle('light');
    const icon = document.getElementById("mode-icon");
    const isLight = document.body.classList.contains("light");
    icon.classList.remove("fa-moon", "fa-sun");
    icon.classList.add(isLight ? "fa-sun" : "fa-moon");
}

// 프로필 사진 클릭 시 모달 띄우기
const profileImg = document.getElementById("profile-img");
const modal = document.getElementById("modal");
const modalImg = modal.querySelector("img");
const closeModalBtn = document.getElementById("close-modal-btn"); // 닫기 버튼 참조

profileImg.addEventListener("click", function () {
    modal.classList.add("active"); // 모달 창 활성화
    modalImg.src = profileImg.src; // 프로필 이미지 원본 크기로 변경
});

// 닫기 버튼 클릭 시 모달 닫기
closeModalBtn.addEventListener("click", function () {
    modal.classList.remove("active"); // 모달 창 비활성화
});

// 모달 배경 클릭 시 닫기 (이미지 클릭 시 닫히지 않도록 수정)
modal.addEventListener("click", function (event) {
    if (event.target === modal) { // 클릭된 요소가 모달 배경 자체인지 확인
        modal.classList.remove("active"); // 모달 창 비활성화
    }
});

const toggleBtn = document.getElementById('easter-toggle-btn');
const eggContainer = document.getElementById('easter-egg-container');
const messageBox = document.getElementById('easter-message');

toggleBtn.addEventListener('click', () => {
    eggContainer.classList.toggle('active');
});

function checkEasterEgg() {
    const input = document.getElementById('easter-input').value.trim().toLowerCase();
    const messageBox = document.getElementById('easter-message');
    const secretLink = document.getElementById('secret-link');

    if (input === 'nedier') {
        messageBox.innerHTML = '🎉 축하합니다! 이스터에그를 찾았어요!';
        secretLink.style.display = 'inline-block';

        // Confetti 효과 실행
        if (typeof confetti === "function") {
            confetti({
                particleCount: 100,
                spread: 70,
                origin: { y: 0.6 }
            });
        }
    } else {
        messageBox.innerHTML = '❌ 힌트: n';
        secretLink.style.display = 'none';
    }
}