// ------------------- Библиотеки -----------------
import throttle from 'lodash.throttle';

// ------------------- Инициализация --------------
// Инициализация узла
const refs = {
  form: document.querySelector(".feedback-form"),
  input: document.querySelector(".feedback-form input"),
  textArea: document.querySelector(".feedback-form textarea"),
}

// ------------------- Обработчики ----------------

const onFormInput = (e) => {
  ;

};

const onFormSubmit = (e) => {
  
  // запрет перегрузки страницы 
  e.preventDefault();
  
  // создаем экземпляр формы
  const formData = new FormData(refs.form);
  
  // передаем в currentCard значение formData
  let currentCard = {};
  formData.forEach((value, name) => currentCard[name] = value); 

  // вывод в консоль
  console.table(currentCard);

  // обнуление полей
  e.currentTarget.reset();

}


// Проверка и  заполнение полей если в localStorage что-то есть



// ------------------- Слушатели ------------------
// Слушатель на ввод
refs.form.addEventListener('input', throttle(onFormInput, 500));
// Слушатель на submit
refs.form.addEventListener('submit', onFormSubmit);
