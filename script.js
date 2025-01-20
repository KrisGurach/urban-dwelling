// Скрытие/показ кнопки "Подробнее" при наведении
const items = document.querySelectorAll('.results__container-item');

items.forEach(item => {
  const button = item.querySelector('.results__button');

  item.addEventListener('mouseover', () => {
    button.style.display = 'block';
  });

  item.addEventListener('mouseout', () => {
    button.style.display = 'none';
  });
});

// Замена инпута на кнопку с открытием инпута
function createInput() {
  const input = document.createElement('input');
  input.className = 'navbar__input-popup';
  input.placeholder = 'Поиск';
  return input;
}

function toggleInputButton() {
  const navbarInput = document.querySelector('.navbar__input-popup');
  const popup = document.getElementById('popup');

  if (window.innerWidth >= 1021 && window.innerWidth <= 1400) {
      if (navbarInput) {
          navbarInput.parentElement.removeChild(navbarInput);
      }

      popup.style.display = 'flex';

      const input = createInput();
      popup.querySelector('.popup-content').appendChild(input);
  } else {
      if (navbarInput) {
        document.querySelector('.popup').style.display = 'none';
        navbarInput.parentElement.removeChild(navbarInput);
      }
  }
}

document.querySelector('.navbar__open-popup').addEventListener('click', toggleInputButton);

window.addEventListener('click', (event) => {
  const popup = document.getElementById('popup');
  if (event.target === popup) {
      popup.style.display = 'none';
  }
});

window.addEventListener('resize', () => {
  document.querySelector('.popup').style.display = 'none';

  const navbarInput = document.querySelector('.navbar__input-popup');
  if (navbarInput) {
      navbarInput.parentElement.removeChild(navbarInput);
  }
  toggleInputButton();
});
