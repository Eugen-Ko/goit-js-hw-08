// ------------------- Библиотеки -----------------
import throttle from 'lodash.throttle';

// ------------------- Инициализация --------------
// Инициализация узла

const formFeedBack = document.querySelector(".feedback-form");

// Запись ключа локального хранилища
const LOCALSTORAGEKEY = "feedback-form-state";

// Заполнение полей формы, 
// если есть сохраненные значение в lokalStorage

const formInit = () => {

  // Получаем значение из localStorage
  let currentValueOfFields = localStorage.getItem(LOCALSTORAGEKEY);
  
  // Если значение не "пустое"
  if (!currentValueOfFields) return;
  
  // Парсим "объектную строку" в объект
  currentValueOfFields = JSON.parse(currentValueOfFields);
   
  // Преобразуем объект в массив массивов 
  // и потом записываем соответствующие значения в поля
  Object.entries(currentValueOfFields).forEach(([name, value]) => formFeedBack.elements[name].value = value);
  
}

formInit();

// ------------------- Обработчики ----------------

const onFormInput = (e) => {

  // Обновляем текущее значение полей
  let currentValueOfFields = localStorage.getItem(LOCALSTORAGEKEY);

  // Парсим строки в объект
  currentValueOfFields = currentValueOfFields ? JSON.parse(currentValueOfFields) : {};

  // Записываем в соответствующее свойство объекта значение поля
  currentValueOfFields[e.target.name] = e.target.value

  // Преобразуем объект в "объектные строки"
  localStorage.setItem(LOCALSTORAGEKEY, JSON.stringify(currentValueOfFields));
  
};

const onFormSubmit = (e) => {
  
  // запрет перегрузки страницы 
  e.preventDefault();
  
  // создаем экземпляр формы
  const formData = new FormData(formFeedBack);
  
  // передаем в currentCard значение formData
  let currentCard = {};
  formData.forEach((value, name) => currentCard[name] = value); 

  // вывод в консоль
  console.table(currentCard);

  // обнуление полей
  e.currentTarget.reset();
  // Очистка localStorage
  localStorage.clear();

}

// ------------------- Слушатели ------------------
// Слушатель на ввод
formFeedBack.addEventListener('input', throttle(onFormInput, 500));
// Слушатель на submit
formFeedBack.addEventListener('submit', onFormSubmit);