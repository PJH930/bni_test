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

