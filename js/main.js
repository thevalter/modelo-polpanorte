const openMenu = document.querySelector('#open');
const closeMenu = document.querySelector('#close');

openMenu.addEventListener('click', () => {
  document.querySelector('aside').classList.toggle('active');
  closeMenu.style.display = 'block';
});

closeMenu.addEventListener('click', () => {
    document.querySelector('aside').classList.toggle('active');
    closeMenu.style.display = 'none';
});