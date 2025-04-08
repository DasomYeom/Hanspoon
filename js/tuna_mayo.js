// tuna_mayo.js 파일

// 햄버거 버튼 클릭 시 사이드바 토글
const menuBtn = document.getElementById("menu-btn");
const sidebar = document.getElementById("sidebar");

menuBtn.addEventListener("click", function() {
  sidebar.classList.toggle("show");
});
