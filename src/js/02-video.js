// ------------------- Библиотеки -----------------
import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

// ------------------- Инициализация --------------
// Инициализация узла
const iframe = document.querySelector('#vimeo-player');
// const iframe = document.getElementById('vimeo-player');

// Создание экземпляра
const player = new Player(iframe);

// ------------------- Обработчики ----------------
// Обновляет в локальном хранилище текущую позицию
const onPlay = (time) => localStorage.setItem("videoplayer-current-time", time.seconds);

// Получает из локального хранилища текущую позицию
const currentTimeOfVideo = localStorage.getItem("videoplayer-current-time");

// Если есть сохраненная текущая позиция и она отлична от 0, 
// устанавливаем на плеере сохраненную текущую позицию
(currentTimeOfVideo) ? player.setCurrentTime(currentTimeOfVideo) : null;

// ------------------- Слушатели ------------------
// При запуске просмотра вызываем обработку и передаем текущие 
// секунды в onPlay с интервалом в 1 секунду
player.on('timeupdate', throttle(onPlay, 1000));

// Раскомментировать для очистки localStorage
// localStorage.clear();