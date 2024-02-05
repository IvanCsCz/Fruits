const formFruit = document.querySelector('#enteredValue form');
const fruitList = document.querySelector('#fruitsSection ul');

const getFruit = (e) => {
  e.preventDefault();
  newFruit(e.target.fruitValue.value);
  e.target.fruitValue.value = '';
};

const deleteFruit = (e) => {
  e.target.remove();
};

const newFruit = (fruit) => {
  const li = document.createElement('li');
  li.textContent = fruit;
  li.addEventListener('click', deleteFruit);
  fruitList.appendChild(li);
};

formFruit.addEventListener('submit', getFruit);
