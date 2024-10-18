// 디바운스 함수: 짧은 시간에 여러 번 실행되지 않도록 조절
function debounce(func, wait) {
    let timeout;
    return function(...args) {
        const context = this;
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(context, args), wait);
    };
}

// 페이지 로드 시 초기 상태 설정
window.addEventListener('load', function() {
    // 로딩 스피너 숨기기
    document.getElementById('loading-spinner').style.display = 'none';
    
    // body의 loading 클래스를 제거하여 스크롤 활성화
    document.body.classList.remove('loading');
    
    // 네비게이션 바와 메뉴 상태 초기화
    document.querySelector('.site-navbar').style.display = 'block';
    initializeNavbar();
    updateMenuDisplay();
});

// 확대/축소 방지 이벤트 리스너
document.addEventListener('gesturestart', function (e) {
    e.preventDefault(); // 확대/축소 방지
});



// 부드러운 스크롤
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});







// FAQ 토글 기능
document.querySelectorAll('.question h3').forEach(item => {
    item.addEventListener('click', function() {
        const answer = this.nextElementSibling;
        answer.style.display = answer.style.display === 'none' ? 'block' : 'none';
    });
});






// 참석 메일 폼 제출
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    // 이메일 전송 로직을 추가할 수 있음
    alert('참석 신청이 접수되었습니다.');
});




// 페이지 로드 시 초기화 함수 실행
window.addEventListener('load', function() {
    initializeNavbar(); // 네비게이션 바 초기화
    updateMenuDisplay(); // 메뉴 상태 초기화
});

// 디바운스 함수: 짧은 시간에 여러 번 실행되지 않도록 조절
function debounce(func, wait) {
    let timeout;
    return function(...args) {
        const context = this;
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(context, args), wait);
    };
}


// 스크롤 이벤트 리스너 추가
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.site-navbar');
    const contactBar = document.querySelector('.site-navbar-wrap'); // 소셜 미디어 및 연락처 바
    const contactBarHeight = contactBar.offsetHeight; // 연락처 바의 높이

    // 페이지의 제일 위쪽이 네비게이션 바의 위쪽에 위치하는 순간
    if (window.scrollY >= contactBarHeight) {
        navbar.classList.add('scrolled'); // 클래스를 추가
        navbar.style.position = 'fixed'; // 네비게이션 바를 고정 위치로 변경
        navbar.style.top = '0'; // 화면 최상단에 고정
    } else {
        navbar.classList.remove('scrolled'); // 클래스를 제거
        navbar.style.position = 'absolute'; // 기본 위치로 되돌림
        navbar.style.top = ''; // 기본 위치로 되돌림
    }
});

// 초기화 함수: 네비게이션 바 상태 초기화
function initializeNavbar() {
    const navbar = document.querySelector('.site-navbar');
    const contactBar = document.querySelector('.site-navbar-wrap');
    const contactBarHeight = contactBar.offsetHeight;

    // 화면이 작거나 스크롤이 일정 높이 이상일 때 네비게이션 바를 작게 설정
    if (window.scrollY >= contactBarHeight || window.innerWidth <= 1024) {
        navbar.style.position = 'fixed'; // 네비게이션 바 고정
    } else {
        navbar.classList.remove('scrolled'); // 스크롤 상태 제거
        navbar.style.position = 'absolute'; // 절대 위치로 변경
        navbar.style.top = ''; // 기본 위치로 설정
    }
}

// 메뉴 상태 업데이트 함수: 화면 크기에 따라 메뉴 보이기/숨기기
function updateMenuDisplay() {
    const menuItems = document.querySelectorAll('.menu-item');
    const subBtn = document.querySelector('.sub_btn');

    if (window.innerWidth <= 1024) {
        menuItems.forEach(item => {
            item.style.display = 'none'; // 메뉴 항목 숨기기
        });
        subBtn.style.display = 'inline-block'; // 참석 문의 버튼 보이기
    } else {
        menuItems.forEach(item => {
            item.style.display = 'flex'; // 메뉴 항목 보이기
        });
        subBtn.style.display = 'inline-block'; // 참석 문의 버튼 보이기
    }
}

// 스크롤 이벤트 리스너 추가 (디바운스 적용)
window.addEventListener('scroll', debounce(initializeNavbar, 100));

// 화면 크기 변경 이벤트 리스너 추가 (디바운스 적용)
window.addEventListener('resize', debounce(updateMenuDisplay, 100));

// 슬라이딩 메뉴 열기/닫기 버튼에 이벤트 추가
document.querySelector('.menu-icon').addEventListener('click', function() {
    const slidingMenu = document.querySelector('.sliding-menu');
    slidingMenu.classList.toggle('open'); // 메뉴 열기/닫기 토글
});

// 슬라이딩 메뉴 닫기 버튼에 이벤트 추가
document.querySelector('.close-btn').addEventListener('click', function() {
    const slidingMenu = document.querySelector('.sliding-menu');
    slidingMenu.classList.remove('open'); // 메뉴 닫기
});







function openVideo() {
    const videoPopup = document.getElementById('video-popup');
    const videoFrame = document.getElementById('video-frame');
    
    // 유튜브 동영상 URL 설정 (예: 'https://www.youtube.com/embed/VIDEO_ID')
    videoFrame.src = 'https://www.youtube.com/embed/YOUR_VIDEO_ID?autoplay=1'; // 자동 재생
    videoPopup.classList.add('show'); // 팝업 표시
}

function closeVideo() {
    const videoPopup = document.getElementById('video-popup');
    const videoFrame = document.getElementById('video-frame');
    
    videoFrame.src = ''; // 비디오 정지
    videoPopup.classList.remove('show'); // 팝업 숨김
}








function showMembers(group) {
    const allMembers = document.querySelectorAll('.member-wrapper');
    const buttons = document.querySelectorAll('.button-container button');

    // 모든 멤버 숨기기
    allMembers.forEach(member => {
        if (member.classList.contains(group)) {
            member.style.display = 'block'; // 그룹에 해당하는 멤버는 보이게
            setTimeout(() => {
                member.classList.add('show'); // 부드러운 효과를 위해 show 클래스 추가
            }, 10); // display가 block으로 설정된 후에 show 클래스 추가
        } else {
            member.classList.remove('show'); // 그룹에 해당하지 않는 멤버는 숨김
            member.style.display = 'none'; // 숨김 처리
        }
    });

    // 모든 버튼에서 active 클래스 제거
    buttons.forEach(button => {
        button.classList.remove('active');
    });

    // 현재 그룹의 버튼에 active 클래스 추가
    const activeButton = document.querySelector(`.button-container button[onclick="showMembers('${group}')"]`);
    if (activeButton) {
        activeButton.classList.add('active');
    }
}

// 초기 상태: 그룹 1 멤버만 보이게
showMembers('group1');









document.addEventListener('DOMContentLoaded', function() {
    const questions = document.querySelectorAll('.question'); // 모든 질문 요소를 선택

    questions.forEach(function(question) {
        // 각 질문에 클릭 이벤트 리스너를 추가
        question.addEventListener('click', function() {
            const openAnswer = document.querySelector('.answer.show'); // 현재 열려 있는 답변을 선택
            const answer = this.nextElementSibling; // 클릭한 질문 다음에 있는 답변 요소 선택
            const icon = this.querySelector('.icon'); // 클릭한 질문의 아이콘 선택

            // 클릭된 질문의 텍스트 색상을 빨간색으로 변경
            questions.forEach(q => {
                q.style.color = 'black'; // 모든 질문의 색상을 기본으로 되돌림
                const qIcon = q.querySelector('.icon'); // 각 질문의 아이콘 선택
                qIcon.src = 'images/FAQ/plus.png'; // 모든 아이콘을 "+"로 설정
                qIcon.classList.remove('rotate'); // 모든 아이콘 회전 제거
            });
            this.style.color = 'red'; // 클릭된 질문의 색상을 빨간색으로 변경

            // 클릭한 아이콘 회전 애니메이션 추가
            icon.classList.add('rotate');

            // 다른 질문의 답변이 열려 있고, 클릭한 질문의 답변이 아닐 경우 닫기
            if (openAnswer && openAnswer !== answer) {
                closeAnswer(openAnswer);
            }

            // 클릭한 질문의 답변이 이미 열려 있다면 닫기
            if (answer.classList.contains('show')) {
                closeAnswer(answer);
            } else {
                // 클릭한 질문의 답변이 열려 있지 않다면 열기
                openAnswerElement(answer);
            }

            // 아이콘 토글
            icon.src = icon.src.includes('plus.png') ? 'images/FAQ/minus.png' : 'images/FAQ/plus.png'; // 아이콘 토글
        });
    });

    // 답변을 여는 함수
    function openAnswerElement(answer) {
        answer.style.maxHeight = answer.scrollHeight + 'px'; // 답변의 실제 높이로 설정
        answer.classList.add('show'); // "show" 클래스를 추가하여 답변을 보이게 함
    }

    // 답변을 닫는 함수
    function closeAnswer(answer) {
        answer.style.maxHeight = '0'; // 높이를 0으로 설정하여 닫힘 애니메이션
        answer.classList.remove('show'); // "show" 클래스를 제거하여 답변을 숨김
    }
});






let currentSlideIndex = 0; // 현재 이미지 인덱스를 0으로 초기화
const images = document.querySelectorAll('.gallery-grid img'); // 갤러리의 모든 이미지 요소를 선택
const popup = document.getElementById('image-popup'); // 이미지 팝업 요소를 선택
const popupImage = document.getElementById('popup-image'); // 팝업 내 이미지 요소를 선택

// 팝업을 열고 클릭한 이미지를 확대 효과와 함께 표시하는 함수
function openPopup(index) {
    currentSlideIndex = index; // 현재 인덱스를 클릭한 이미지의 인덱스로 설정
    popup.style.display = 'flex'; // 팝업을 flex로 표시하여 보이게 함
    updatePopupImage(true); // true를 전달하여 확대 효과를 트리거
}

// 팝업을 닫는 함수
function closePopup() {
    popup.style.display = 'none'; // 팝업을 숨김
    popupImage.classList.remove('active'); // 닫을 때 active 클래스를 제거
}

// 애니메이션과 함께 슬라이드를 변경하는 함수
function changeSlide(direction) {
    popupImage.classList.remove('active'); // 현재 이미지를 애니메이션으로 숨김
    
    // 슬라이딩 효과 추가
    if (direction === 1) {
        popupImage.classList.add('slide-left'); // 오른쪽으로 슬라이드
    } else {
        popupImage.classList.add('slide-right'); // 왼쪽으로 슬라이드
    }

    setTimeout(() => {
        currentSlideIndex += direction; // 현재 인덱스에 방향을 더함
        
        // 시작 부분에 도달하면 마지막 이미지로 루프
        if (currentSlideIndex < 0) {
            currentSlideIndex = images.length - 1; // 마지막 이미지로 루프
        } else if (currentSlideIndex >= images.length) {
            currentSlideIndex = 0; // 첫 번째 이미지로 루프
        }

        // 이미지 업데이트 및 전환 후 슬라이드 효과 제거
        updatePopupImage(false); // false를 전달하여 확대 효과를 트리거하지 않음
    }, 500); // CSS 전환 시간과 일치시킴
}

// 팝업의 이미지를 업데이트하는 함수
function updatePopupImage(isZoomEffect) {
    // 새로운 이미지를 적용하기 전에 슬라이딩 효과를 제거
    popupImage.classList.remove('slide-left', 'slide-right');
    
    popupImage.src = images[currentSlideIndex].src; // 현재 인덱스의 이미지 소스를 설정

    // 확대 효과가 필요한 경우 'active' 클래스를 적용
    if (isZoomEffect) {
        setTimeout(() => {
            popupImage.classList.add('active'); // 확대 효과를 위해 active 클래스를 재적용
        }, 50); // 부드러운 확대 효과를 위해 짧은 지연
    } else {
        popupImage.classList.add('active'); // 일반 전환을 위해 active 클래스를 재적용
    }
}

// 이미지 외부를 클릭하면 팝업을 닫는 이벤트 리스너
popup.addEventListener('click', function(event) {
    if (event.target === popup) { // 클릭한 대상이 팝업과 같으면
        closePopup(); // 팝업을 닫음
    }
});
