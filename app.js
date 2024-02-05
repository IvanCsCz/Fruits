const formFruit = document.querySelector('#enteredValue form');
const fruitList = document.querySelector('#fruitsSection ul');
const infoNutritions = document.querySelector('#nutritionSection p');
let calories = 0;
let fruitCalories = {};

const fetchFruit = async (fruitName) => {
  try {
    const resp = await fetch(
      `https://fruity-api.onrender.com/api/fruits/${fruitName}`
    );
    if (resp.ok) {
      const data = await resp.json();
      newFruit(data);
    }
  } catch (e) {
    console.log(e);
  }
};

const getFruit = (e) => {
  e.preventDefault();
  e.target.fruitValue.value === ''
    ? alert('Type a correct fruit')
    : fetchFruit(e.target.fruitValue.value);
  e.target.fruitValue.value = '';
};

const deleteFruit = (e) => {
  const fruitName = e.target.textContent;
  calories -= fruitCalories[fruitName];
  infoNutritions.textContent = calories;

  e.target.remove();
};

const newFruit = (fruit) => {
  const li = document.createElement('li');
  li.textContent = fruit.name;
  li.addEventListener('click', deleteFruit);
  fruitList.appendChild(li);

  fruitCalories[fruit.name] = fruit.nutritions.calories;

  console.log(fruitCalories);

  calories += fruit.nutritions.calories;
  infoNutritions.textContent = calories;
};

formFruit.addEventListener('submit', getFruit);
