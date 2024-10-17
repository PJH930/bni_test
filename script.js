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








let currentSlideIndex = 0;
const images = document.querySelectorAll('.gallery-grid img');
const popup = document.getElementById('image-popup');
const popupImage = document.getElementById('popup-image');

// Open popup and display the clicked image with zoom-in effect
function openPopup(index) {
    currentSlideIndex = index;
    popup.style.display = 'flex';
    updatePopupImage(true); // Pass true to trigger the zoom effect
}

// Close popup
function closePopup() {
    popup.style.display = 'none';
    popupImage.classList.remove('active');  // Remove active class when closing
}

// Change slide with animation
function changeSlide(direction) {
    popupImage.classList.remove('active');  // Hide current image with animation
    
    // Add sliding effect
    if (direction === 1) {
        popupImage.classList.add('slide-left');
    } else {
        popupImage.classList.add('slide-right');
    }

    setTimeout(() => {
        currentSlideIndex += direction;
        
        if (currentSlideIndex < 0) {
            currentSlideIndex = images.length - 1;  // Loop to the last image if at the beginning
        } else if (currentSlideIndex >= images.length) {
            currentSlideIndex = 0;  // Loop to the first image if at the end
        }

        // Update the image and remove slide effect after transition
        updatePopupImage(false);  // Pass false to not trigger zoom effect
    }, 500);  // Match the CSS transition time
}

// Update the image in the popup
function updatePopupImage(isZoomEffect) {
    // Remove any sliding effect before applying the new image
    popupImage.classList.remove('slide-left', 'slide-right');
    
    popupImage.src = images[currentSlideIndex].src;

    // If the zoom effect is desired, apply the 'active' class
    if (isZoomEffect) {
        setTimeout(() => {
            popupImage.classList.add('active');  // Re-apply active class for zoom-in effect
        }, 50);  // Short delay to ensure smooth zoom effect
    } else {
        popupImage.classList.add('active');  // Re-apply active class for normal transition
    }
}

// Close popup when clicking outside the image
popup.addEventListener('click', function(event) {
    if (event.target === popup) {
        closePopup();
    }
});








document.addEventListener('DOMContentLoaded', function() {
    // 모든 질문 항목 클릭 이벤트 처리
    const accordionItems = document.querySelectorAll('.accordion-item a');
    
    accordionItems.forEach(function(item) {
        item.addEventListener('click', function(e) {
            e.preventDefault();

            // 현재 열려 있는 항목 닫기
            const openItem = document.querySelector('.collapse.show');
            if (openItem && openItem !== this.nextElementSibling) {
                openItem.classList.remove('show');
            }

            // 클릭한 항목 열기/닫기 처리
            const target = this.getAttribute('data-target');
            const collapseItem = document.querySelector(target);

            if (collapseItem.classList.contains('show')) {
                collapseItem.classList.remove('show');
            } else {
                collapseItem.classList.add('show');
            }
        });
    });
});
