const getFruit = (e) => {
  e.preventDefault();
  console.log(e.target.fruitValue.value);
  e.target.fruitValue.value = '';
};

const formFruit = document.querySelector('.entered__value form');

formFruit.addEventListener('submit', getFruit);
