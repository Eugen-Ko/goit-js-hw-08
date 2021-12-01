// Инициализация библтотеки
import { throttle } from 'lodash';

// Инициализация узлов
const feedBackForm = document.querySelector('.feedback-form');
const email = document.querySelector('.feedback-form input');
const textArea = document.querySelector('.feedback-form textarea');
const btn = document.querySelector('.feedback-form button');

// ----------------------------------
// ----------- Оюработчик -----------
// ----------------------------------
aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
const onEmailInput = () => {
  console.log('Yesssssssssssssss');
};

const onTextAreaInput = event => {
  console.log(event);
  console.log(textArea.value);
};

const onBtnPress = event => {
  console.log({ event });
};

// ----------------------------------
// ----------- Слушатели ------------
// ----------------------------------
email.addEventListener('input', throttle(onEmailInput, 500));
textArea.addEventListener('input', throttle(onTextAreaInput, 500));
btn.addEventListener('click', throttle(onBtnPress, 500));
// btn.addEventListener('submit', throttle(onBtn, 500));
