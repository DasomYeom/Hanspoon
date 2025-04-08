const menuBtn = document.querySelector('.menu-btn');
const sidebar = document.querySelector('.sidebar');

// 메뉴 버튼 클릭 시 사이드바 열고 닫기
menuBtn.addEventListener('click', () => {
  sidebar.classList.toggle('show');
});

document.addEventListener('click', (e) => {
    if (!sidebar.contains(e.target) && !menuBtn.contains(e.target)) {
      sidebar.classList.remove('show');
    }
  });
  