
// ** 관리자메뉴 메뉴 기능.
document.addEventListener('DOMContentLoaded', () => {

  const foldDownBtn = document.querySelector('.foldDown-Btn');
  const foldUpBtn = document.querySelector('.foldUp-Btn');
  const menuItems = document.querySelectorAll('.menuSetList li');
  const openCloseBtns = document.querySelectorAll('.openClose');

  // 2. 모두 펼치기 : 클릭시 모든  li에 off 제거.
  if (foldDownBtn) {
    foldDownBtn.addEventListener('click', () => {
      menuItems.forEach(li => li.classList.remove('off'));
    });
  }

  // 3. 모두 접기 : 클릭시 모든 li에 off 추가.
  if (foldUpBtn) {
    foldUpBtn.addEventListener('click', () => {
      menuItems.forEach(li => li.classList.add('off'));
    });
  }

  // 4. 메뉴명 우측 접기/펼치기버튼 클릭시 부모의 li 에 off 토글되도록함.
  openCloseBtns.forEach(btn => {
    btn.addEventListener('click', function() {
      const parentLi = this.closest('li');
      if (parentLi) {
        parentLi.classList.toggle('off');
      }
    });
  });
});