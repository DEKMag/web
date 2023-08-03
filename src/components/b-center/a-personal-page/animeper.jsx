// import { Component } from 'react';
// import anime from 'animejs';
// import './anime.css';

// class AnimatedComponent extends Component {
//   componentDidMount() {
// anime({
//   targets: [
// document.querySelector('.animaOne'),
// document.querySelector('.animaTwo'),
// document.querySelector('.animaThree'),
//   ], // CSS-селектор элемента, который будет анимирован
// translateX: 250, // Например, перемещение элемента по оси X на 250 пикселей
//   translateX: {
//     value: 150,
//     duration: 50,
//   },
//   background: '#7CFC00', // задать цвет при анимации
// rotate: '25', // Поворот элемента
//   rotate: function (element, index, length) {
//     return anime.random(-360, 360);
//   },
//   opacity: 0.5,
// round: 1, Возможность округлить значение цыфр
// delay: 1000, //Задержка
//   delay: function (element, index, length) {
//     return index * 100;
//   }, // Вывод информации с задержкой. Функцию можно применять и к другим параметрам
//   scale: function (element, index, length) {
//     return 1 + index / 1;
//   }, // Изменение размера
//   delay: anime.stagger(100, {
//     start: 50,
// from: 'last', // Анимация начнётся с конца
//     from: 'centr', // Анимация от центра
// easing: 'easeInBounce', // Задать стиль анимации
//   }),
// direction: 'alternate', // Вобратном направлении
// endDelay: 1000, //Задержка в конце анимации
//   duration: 1000, // Продолжительность анимации в миллисекундах
//   easing: 'easeInOutSine', // Функция плавности анимации
//   loop: true, // Зациклить анимацию
// });
// anime({
//   targets: '.animaFour', // CSS-селектор элемента, который будет анимирован
//   width: '100%', // -> изначальный размер '28px' увеличивается до '100%',
//   easing: 'easeInOutQuad', // Функция плавности анимации
//   direction: 'alternate',
//   loop: true,
// });
// var colorsExamples = anime
//   .timeline({
//     endDelay: 1000,
//     easing: 'easeInOutQuad',
//     direction: 'alternate',
//     loop: true,
//   })
//   .add({ targets: '.animaFour', background: 'rgba(255,255,255, .2)' }, 0);
// anime({
//   targets: '.animaFive', // CSS-селектор элемента, который будет анимирован
//   keyframes: [
//     { translateY: -40 },
//     { translateX: 250 },
//     { translateY: 40, width: '20%' },
//     { translateX: 0 },
//     { translateY: 0 },
//   ], // Анимация по точкам
//   duration: 4000,
//   easing: 'easeOutElastic(1, .8)',
//   loop: true, // Зациклить анимацию
// });
// const tl = anime
//   .timeline({
//     easing: 'easeOutExpo',
//     duration: 750,
//   })
//   .add({
//     targets: 'One', // Добавление элемента по индефикатору
//     translateX: 350,
//   });
// const animation = anime({
//   targets: [
//     document.querySelector('.animaOne'),
//     document.querySelector('.animaTwo'),
//     document.querySelector('.animaThree'),
//     document.querySelector('.animaFour'),
//     document.querySelector('.animaFive'),
//   ],
//   translateX: 270,
//   delay: function (el, i) {
//     return i * 100;
//   },
//   direction: 'alternate',
//   loop: true,
//   autoplay: false,
//   easing: 'easeInOutSine',
// });
// const btnStart = (document.querySelector('#btnStart').onclick =
//   animation.play);
// const btnPause = (document.querySelector('#btnPause').onclick =
//   animation.pause);
// const btnRestart = (document.querySelector('#btnRestart').onclick =
//   animation.restart);
// const btnRevers = (document.querySelector('#btnRevers').onclick =
//   animation.reverse);
// const range = document.querySelector('#volume');
// range.addEventListener('input', function (ev) {
//   const target = ev.target || ev.srcElement;
//   const value = +target.value;
//   animation.seek(animation.duration * (value / 100));
// });
//   }

//   render() {
//     return (
//       <div className="content">
//         <button id="btnStart">Пуск</button>
//         <button id="btnPause">Пауза</button>
//         <button id="btnRestart">Рестарт</button>
//         <button id="btnRevers">Перезапуск</button>
//         <input type="range" id="volume" name="volume" min="0" max="11" />
//         {/* <div className="animatedElement">Текст</div> */}
//         <div className="animaOne"></div>
//         <div className="animaTwo"></div>
//         <div className="animaThree"></div>
//         <div className="animaFour"></div>
//         <div className="animaFive"></div>
//       </div>
//     );
//   }
// }

// export default AnimatedComponent;

import React, { Component } from 'react';
import anime from 'animejs';
import './anime.css';

class AnimatedComponent extends Component {
  componentDidMount() {
    anime({
      targets: 'path',
      width: '100%',
      loop: true,
    });
  }

  render() {
    return (
      <div className="content" ref={this.contentCenterRef}>
        <svg
          width="150"
          height="75"
          viewBox="0 0 473.8 79.201"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g
            id="svgGroup"
            stroke-linecap="round"
            fill-rule="evenodd"
            font-size="9pt"
            stroke="#faebd7"
            stroke-width="0.25mm"
            fill="#faebd7"
          >
            <path
              d="M 426.1 64.2 L 429.1 67.8 Q 424.2 73.6 418.4 76.4 Q 413.945 78.551 407.367 79.049 A 55.173 55.173 0 0 1 403.2 79.2 Q 394.7 79.2 388.3 75.65 Q 381.9 72.1 378.35 65.55 A 28.875 28.875 0 0 1 375.304 56.476 A 38.695 38.695 0 0 1 374.8 50.1 A 34.147 34.147 0 0 1 376.2 40.203 A 30.609 30.609 0 0 1 378.05 35.5 Q 381.3 28.9 387.55 24.95 A 24.914 24.914 0 0 1 396.188 21.603 A 34.579 34.579 0 0 1 402.8 21 A 32.536 32.536 0 0 1 409.85 21.729 A 24.576 24.576 0 0 1 417.1 24.55 Q 423.1 28.1 426.4 34.55 A 29.129 29.129 0 0 1 429.068 42.581 A 40.343 40.343 0 0 1 429.7 49.9 A 11.163 11.163 0 0 1 429.673 50.661 A 12.957 12.957 0 0 1 429.65 50.95 Q 429.6 51.5 429.6 52.1 L 391 56.9 A 9.125 9.125 0 0 0 394.124 62.046 A 12.753 12.753 0 0 0 395.55 63.1 Q 399.3 65.5 404.5 65.5 Q 409.4 65.5 413.7 63.5 Q 418 61.5 420.7 57.6 L 423.8 61.4 A 33.005 33.005 0 0 1 420.048 65.015 Q 417.588 67.019 415 68.2 Q 410.4 70.3 404.5 70.3 A 19.781 19.781 0 0 1 397.117 68.95 A 18.437 18.437 0 0 1 392.35 66.15 Q 387.2 62 385.3 52.7 L 424.8 47.8 A 31.172 31.172 0 0 0 423.629 40.788 A 21.341 21.341 0 0 0 418.4 31.7 A 19.328 19.328 0 0 0 407.792 26.229 A 27.817 27.817 0 0 0 402.8 25.8 A 28.361 28.361 0 0 0 396.881 26.387 A 20.522 20.522 0 0 0 390.1 29.1 Q 384.9 32.4 382.25 37.9 A 26.957 26.957 0 0 0 379.693 47.63 A 32.28 32.28 0 0 0 379.6 50.1 A 31.861 31.861 0 0 0 380.237 56.62 A 24.214 24.214 0 0 0 382.5 63 Q 385.4 68.5 390.7 71.5 A 22.779 22.779 0 0 0 398.27 74.113 A 30.187 30.187 0 0 0 403.2 74.5 Q 407.759 74.5 411.262 73.732 A 24.092 24.092 0 0 0 412.95 73.3 A 24.074 24.074 0 0 0 418.466 70.913 A 21.689 21.689 0 0 0 420.15 69.8 A 33.16 33.16 0 0 0 424.588 65.883 A 39.054 39.054 0 0 0 426.1 64.2 Z M 70 78 L 45.7 4.8 L 29.5 4.8 L 5 78 L 0 78 L 26 0 L 49.2 0 L 75.2 78 L 70 78 Z M 326.5 74.2 L 325.4 78.6 Q 322.9 79.2 320.3 79.2 A 20.349 20.349 0 0 1 315.357 78.618 A 17.479 17.479 0 0 1 312.3 77.55 Q 308.7 75.9 307.8 72.9 A 13.049 13.049 0 0 1 303.6 76.32 A 18.617 18.617 0 0 1 299.95 77.75 Q 294.8 79.2 288.9 79.2 Q 283.048 79.2 279.116 77.257 A 13.402 13.402 0 0 1 275.95 75.1 Q 271.5 71 271.4 63.9 L 271.4 63.6 A 21.709 21.709 0 0 1 272.051 58.138 A 15.471 15.471 0 0 1 276.05 51 A 19.259 19.259 0 0 1 280.488 47.724 Q 282.686 46.513 285.459 45.566 A 48.454 48.454 0 0 1 290.8 44.1 Q 294.539 43.338 297.247 42.409 A 26.658 26.658 0 0 0 299.45 41.55 Q 301.678 40.556 302.378 39.445 A 1.936 1.936 0 0 0 302.7 38.4 Q 302.7 37.055 302.213 36.228 A 2.441 2.441 0 0 0 301.15 35.25 A 5.171 5.171 0 0 0 300.147 34.904 Q 298.511 34.5 295.5 34.5 Q 293.902 34.5 291.828 35.054 A 26.081 26.081 0 0 0 290.2 35.55 Q 287.1 36.6 284.2 38.4 A 18.557 18.557 0 0 0 281.286 40.615 A 15.303 15.303 0 0 0 279.5 42.6 L 277 38.2 Q 281.1 34.1 286.3 31.9 A 33.708 33.708 0 0 1 289.957 30.581 Q 291.833 30.032 293.523 29.825 A 16.27 16.27 0 0 1 295.5 29.7 Q 302.9 29.7 305.2 31.85 Q 307.143 33.666 307.445 37.089 A 14.951 14.951 0 0 1 307.5 38.4 Q 307.5 40.9 303.5 44 A 19.328 19.328 0 0 1 300.001 46.118 Q 298.209 46.977 296.006 47.68 A 47.564 47.564 0 0 1 291.8 48.8 A 39.415 39.415 0 0 0 287.258 49.986 Q 285.013 50.728 283.232 51.688 A 15.951 15.951 0 0 0 280.05 53.9 A 11.484 11.484 0 0 0 276.476 60.475 A 16.897 16.897 0 0 0 276.2 63.6 L 276.2 63.8 A 12.871 12.871 0 0 0 276.685 67.169 A 9.188 9.188 0 0 0 279.6 71.7 Q 282.38 74.059 287.077 74.431 A 23.129 23.129 0 0 0 288.9 74.5 A 60.678 60.678 0 0 0 293.599 74.324 A 51.127 51.127 0 0 0 296.25 74.05 A 17.988 17.988 0 0 0 302.237 72.138 A 20.793 20.793 0 0 0 302.95 71.75 Q 306.2 69.9 309.4 65.8 Q 310.038 68.99 311.365 70.918 A 6.768 6.768 0 0 0 313.65 73.05 Q 316.8 74.8 320.4 74.8 Q 322 74.8 323.55 74.6 Q 325.1 74.4 326.5 74.2 Z M 256 78 L 256 39.5 A 17.117 17.117 0 0 0 255.404 34.878 A 13.366 13.366 0 0 0 252.65 29.7 A 10.771 10.771 0 0 0 244.816 25.824 A 13.813 13.813 0 0 0 244 25.8 A 38.049 38.049 0 0 0 238.992 26.113 Q 236.278 26.474 233.95 27.25 A 10.944 10.944 0 0 0 228.747 30.995 A 15.845 15.845 0 0 0 227.1 33.6 Q 225.2 29.3 220.95 27.55 A 23.902 23.902 0 0 0 216.376 26.159 A 19.389 19.389 0 0 0 212.7 25.8 Q 208.9 25.8 205.3 26.5 A 16.638 16.638 0 0 0 199.911 28.6 A 20.207 20.207 0 0 0 198.4 29.6 A 16.508 16.508 0 0 0 195.868 31.918 Q 194.777 33.128 193.721 34.68 A 37.479 37.479 0 0 0 192.1 37.3 L 192.1 22.3 L 196.9 22.3 L 196.9 26.7 Q 200.3 21 212.7 21 Q 217.9 21 221.75 23.05 A 14.378 14.378 0 0 1 224.293 24.749 Q 225.953 26.155 226.828 27.929 A 9.011 9.011 0 0 1 227 28.3 A 11.398 11.398 0 0 1 231.9 23.478 A 15.151 15.151 0 0 1 233.5 22.75 A 24.795 24.795 0 0 1 238.705 21.385 Q 241.11 21.012 243.825 21 A 40.908 40.908 0 0 1 244 21 A 17.417 17.417 0 0 1 249.164 21.744 A 15.246 15.246 0 0 1 252.7 23.35 A 16.127 16.127 0 0 1 258.514 29.639 A 19.092 19.092 0 0 1 258.65 29.9 A 19.523 19.523 0 0 1 260.611 36.4 A 24.685 24.685 0 0 1 260.8 39.5 L 260.8 78 L 256 78 Z M 118.2 78 L 118.2 44.4 A 12.831 12.831 0 0 0 117.965 41.861 Q 117.48 39.464 116 37.95 Q 113.8 35.7 110.3 35.7 Q 106.6 35.7 103.6 37.7 Q 100.6 39.7 99.5 43.4 L 99.5 78 L 94.7 78 L 94.7 42.8 A 19.081 19.081 0 0 1 96.545 38.411 A 14.28 14.28 0 0 1 100.65 33.9 Q 104.9 30.9 110.3 30.9 A 14.829 14.829 0 0 1 114.586 31.491 A 11.723 11.723 0 0 1 119.45 34.35 Q 122.612 37.423 122.958 42.994 A 22.702 22.702 0 0 1 123 44.4 L 123 78 L 118.2 78 Z M 243.3 78 L 243.3 45 Q 243.3 41.011 242.067 38.953 A 5.268 5.268 0 0 0 241.8 38.55 Q 240.3 36.5 236.9 36.5 A 8.371 8.371 0 0 0 234.585 36.804 A 6.209 6.209 0 0 0 231.45 38.85 Q 229.5 41.2 229.5 44.4 L 229.5 78 L 224.7 78 L 224.7 44.2 Q 224.7 39.1 228 35.4 A 10.866 10.866 0 0 1 235.043 31.809 A 15.308 15.308 0 0 1 236.9 31.7 Q 240.906 31.7 243.479 33.286 A 8.332 8.332 0 0 1 245.3 34.8 A 9.059 9.059 0 0 1 247.006 37.688 Q 248.1 40.563 248.1 45 L 248.1 78 L 243.3 78 Z M 131 78 L 131 41.4 Q 131 37.1 129.1 33.55 Q 127.2 30 123.75 27.9 A 14.162 14.162 0 0 0 118.776 26.071 A 19 19 0 0 0 115.5 25.8 Q 111.7 25.8 107.9 26.5 A 18.363 18.363 0 0 0 102.956 28.194 A 23.266 23.266 0 0 0 100.4 29.7 Q 97.616 31.581 94.889 35.161 A 43.49 43.49 0 0 0 93.1 37.7 L 93.1 22.3 L 97.9 22.3 L 97.9 27.4 A 11.574 11.574 0 0 1 100.87 24.508 Q 102.19 23.6 103.864 22.897 A 20.87 20.87 0 0 1 104.35 22.7 A 21.98 21.98 0 0 1 108.205 21.615 Q 110.158 21.24 112.439 21.094 A 47.837 47.837 0 0 1 115.5 21 A 23.534 23.534 0 0 1 120.95 21.604 A 18.392 18.392 0 0 1 126.25 23.75 Q 130.8 26.5 133.3 31.15 A 21.2 21.2 0 0 1 135.796 40.964 A 24.842 24.842 0 0 1 135.8 41.4 L 135.8 78 L 131 78 Z M 212.1 78 L 212.1 45 A 21.176 21.176 0 0 0 211.989 42.755 Q 211.737 40.396 210.91 38.941 A 5.619 5.619 0 0 0 210.7 38.6 A 4.424 4.424 0 0 0 208.251 36.82 Q 207.228 36.5 205.9 36.5 A 7.694 7.694 0 0 0 203.893 36.747 A 5.432 5.432 0 0 0 201.1 38.5 Q 199.4 40.5 198.5 43.6 L 198.5 78 L 193.7 78 L 193.7 43 A 26.711 26.711 0 0 1 195.083 39.348 Q 196.388 36.575 198.2 34.7 A 9.667 9.667 0 0 1 203.891 31.844 A 13.567 13.567 0 0 1 205.9 31.7 A 16.026 16.026 0 0 1 209.043 31.988 Q 210.837 32.347 212.211 33.154 A 7.976 7.976 0 0 1 214.2 34.8 A 9.082 9.082 0 0 1 215.819 37.616 Q 216.792 40.219 216.889 44.121 A 35.393 35.393 0 0 1 216.9 45 L 216.9 78 L 212.1 78 Z M 328.8 64.6 L 327.7 69.1 Q 327 69.2 326.35 69.25 Q 325.7 69.3 325.1 69.3 Q 322.023 69.3 319.998 68.176 A 6.702 6.702 0 0 1 318.45 67 A 7.625 7.625 0 0 1 316.491 63.355 Q 316.2 62.138 316.2 60.7 L 316.2 39.5 Q 316.2 32.3 311.35 29.05 A 16.246 16.246 0 0 0 307.084 27.077 Q 303.085 25.84 297.37 25.801 A 54.741 54.741 0 0 0 297 25.8 A 40.662 40.662 0 0 0 290.8 26.25 A 29.885 29.885 0 0 0 284.65 27.85 A 27.217 27.217 0 0 0 276.298 32.982 A 32.013 32.013 0 0 0 274.9 34.3 L 272.6 30.2 A 27.038 27.038 0 0 1 281.268 24.031 A 31.89 31.89 0 0 1 282.75 23.4 A 32.597 32.597 0 0 1 289.561 21.563 Q 293.028 21 297 21 Q 308.812 21 314.718 25.359 A 15.15 15.15 0 0 1 315.1 25.65 A 14.95 14.95 0 0 1 320.48 34.439 A 23.231 23.231 0 0 1 321 39.5 L 321 60.7 Q 321 62.32 321.786 63.262 A 2.997 2.997 0 0 0 322.45 63.85 A 5.571 5.571 0 0 0 324.289 64.612 Q 325.016 64.776 325.857 64.797 A 9.904 9.904 0 0 0 326.1 64.8 A 17.877 17.877 0 0 0 327.266 64.763 A 16.07 16.07 0 0 0 327.45 64.75 Q 328.1 64.7 328.8 64.6 Z M 56.7 78 L 50.7 59.7 L 24.3 59.7 L 18.1 78 L 13.1 78 L 20.9 54.9 L 54.2 54.9 L 61.7 78 L 56.7 78 Z M 367.3 74.6 L 366.3 79.2 Q 356.5 79.2 350.6 77.65 Q 345.789 76.386 343.172 73.526 A 10.972 10.972 0 0 1 342.1 72.15 A 14.039 14.039 0 0 1 340.375 68.295 Q 339.855 66.493 339.644 64.33 A 32.28 32.28 0 0 1 339.5 61.2 L 339.5 35.8 L 331.5 35.8 L 331.5 31 L 344.3 31 L 344.3 61.2 Q 344.3 64.784 345.234 67.264 A 9.208 9.208 0 0 0 346.5 69.6 A 8.785 8.785 0 0 0 349.3 71.964 Q 350.511 72.633 352.049 73.086 A 19.348 19.348 0 0 0 353.75 73.5 Q 358.569 74.454 366.531 74.589 A 149.431 149.431 0 0 0 367.3 74.6 Z M 471.7 74.6 L 470.7 79.2 Q 460.9 79.2 455 77.65 Q 450.189 76.386 447.572 73.526 A 10.972 10.972 0 0 1 446.5 72.15 A 14.039 14.039 0 0 1 444.775 68.295 Q 444.255 66.493 444.044 64.33 A 32.28 32.28 0 0 1 443.9 61.2 L 443.9 35.8 L 435.9 35.8 L 435.9 31 L 448.7 31 L 448.7 61.2 Q 448.7 64.784 449.634 67.264 A 9.208 9.208 0 0 0 450.9 69.6 A 8.785 8.785 0 0 0 453.7 71.964 Q 454.911 72.633 456.449 73.086 A 19.348 19.348 0 0 0 458.15 73.5 Q 462.969 74.454 470.931 74.589 A 149.431 149.431 0 0 0 471.7 74.6 Z M 369.4 64.9 L 368.4 69.7 A 106.806 106.806 0 0 1 365.235 69.656 Q 361.984 69.559 359.75 69.25 Q 356.5 68.8 354.85 67.6 A 5.111 5.111 0 0 1 353.18 65.487 A 7.473 7.473 0 0 1 352.7 63.95 A 20.049 20.049 0 0 1 352.436 62.258 Q 352.2 60.219 352.2 57.4 L 352.2 31 L 366.4 31 L 366.4 35.8 L 357 35.8 L 357 57.4 A 27.462 27.462 0 0 0 357.053 59.171 Q 357.199 61.425 357.75 62.6 Q 358.5 64.2 361.15 64.55 Q 363.8 64.9 369.4 64.9 Z M 473.8 64.9 L 472.8 69.7 A 106.806 106.806 0 0 1 469.635 69.656 Q 466.384 69.559 464.15 69.25 Q 460.9 68.8 459.25 67.6 A 5.111 5.111 0 0 1 457.58 65.487 A 7.473 7.473 0 0 1 457.1 63.95 A 20.049 20.049 0 0 1 456.836 62.258 Q 456.6 60.219 456.6 57.4 L 456.6 31 L 470.8 31 L 470.8 35.8 L 461.4 35.8 L 461.4 57.4 A 27.462 27.462 0 0 0 461.453 59.171 Q 461.599 61.425 462.15 62.6 Q 462.9 64.2 465.55 64.55 Q 468.2 64.9 473.8 64.9 Z M 82 78 L 82 22.3 L 86.8 22.3 L 86.8 78 L 82 78 Z M 162.4 78 L 162.4 22.3 L 167.2 22.3 L 167.2 78 L 162.4 78 Z M 149.6 78 L 149.6 22.3 L 154.4 22.3 L 154.4 78 L 149.6 78 Z M 181 78 L 181 22.3 L 185.8 22.3 L 185.8 78 L 181 78 Z M 22.5 49.2 L 34.5 12.7 L 40.3 12.7 L 52.3 49.2 L 22.5 49.2 Z M 418.5 44.6 L 385.1 48.9 Q 385.82 42.488 388.081 38.281 A 15.98 15.98 0 0 1 390.9 34.45 A 15.915 15.915 0 0 1 401.822 29.818 A 21.017 21.017 0 0 1 402.7 29.8 A 17.666 17.666 0 0 1 407.585 30.444 A 13.608 13.608 0 0 1 413.3 33.7 A 16.089 16.089 0 0 1 417.111 39.424 Q 418.053 41.756 418.5 44.6 Z M 308 43.5 L 308 60.2 Q 307.2 63.5 304.85 65.95 Q 302.5 68.4 299.55 69.7 A 15.819 15.819 0 0 1 296.458 70.714 A 12.772 12.772 0 0 1 293.8 71 Q 290.491 71 288.273 70.025 A 7.364 7.364 0 0 1 286 68.5 Q 283.5 66 283.5 62 A 14.996 14.996 0 0 1 283.756 59.136 Q 284.323 56.224 286.15 54.5 A 12.161 12.161 0 0 1 288.822 52.622 Q 290.153 51.917 291.804 51.381 A 26.388 26.388 0 0 1 293.9 50.8 A 51.4 51.4 0 0 0 295.704 50.311 Q 297.572 49.77 300 48.95 Q 302.652 48.054 305.613 45.642 A 35.722 35.722 0 0 0 308 43.5 Z M 29.2 44.4 L 45.7 44.4 Q 45.2 42.801 44.101 39.604 A 53.228 53.228 0 0 1 44.1 39.6 Q 43 36.4 41.7 32.45 Q 40.4 28.5 39.3 24.55 A 81.781 81.781 0 0 1 38.452 21.256 Q 38.099 19.747 37.852 18.389 A 45.921 45.921 0 0 1 37.7 17.5 L 37.1 17.5 Q 36.717 19.797 36.012 22.651 A 105.931 105.931 0 0 1 35.55 24.45 Q 34.5 28.4 33.2 32.35 Q 31.9 36.3 30.8 39.55 Q 29.71 42.771 29.209 44.371 A 73.492 73.492 0 0 0 29.2 44.4 Z M 352.2 27.1 L 352.2 4.9 L 357 4.9 L 357 22.3 L 366.4 22.3 L 366.4 27.1 L 352.2 27.1 Z M 456.6 27.1 L 456.6 4.9 L 461.4 4.9 L 461.4 22.3 L 470.8 22.3 L 470.8 27.1 L 456.6 27.1 Z M 331.5 27.1 L 331.5 22.3 L 340.3 22.3 L 340.3 4.9 L 345.1 4.9 L 345.1 27.1 L 331.5 27.1 Z M 435.9 27.1 L 435.9 22.3 L 444.7 22.3 L 444.7 4.9 L 449.5 4.9 L 449.5 27.1 L 435.9 27.1 Z M 390.4 43.9 L 413 41 A 4.85 4.85 0 0 0 412.192 38.933 Q 411.73 38.238 411.016 37.569 A 11.993 11.993 0 0 0 409.9 36.65 A 10.192 10.192 0 0 0 406.186 34.978 Q 404.79 34.647 403.168 34.606 A 18.344 18.344 0 0 0 402.7 34.6 A 14.685 14.685 0 0 0 399.12 35.021 A 12.304 12.304 0 0 0 396.6 35.95 A 12.941 12.941 0 0 0 393.943 37.694 A 10.837 10.837 0 0 0 392.3 39.45 A 10.733 10.733 0 0 0 391.029 41.629 A 8.564 8.564 0 0 0 390.4 43.9 Z M 303.2 59.8 L 303.2 51.5 Q 301.048 53.383 296.324 54.783 A 44.108 44.108 0 0 1 295.2 55.1 A 26.611 26.611 0 0 0 293.285 55.69 Q 291.423 56.348 290.314 57.131 A 6.09 6.09 0 0 0 289.9 57.45 A 4.01 4.01 0 0 0 288.758 59.105 Q 288.5 59.77 288.388 60.603 A 10.434 10.434 0 0 0 288.3 62 A 4.5 4.5 0 0 0 288.677 63.911 Q 289.563 65.821 292.537 66.137 A 11.962 11.962 0 0 0 293.8 66.2 A 9.935 9.935 0 0 0 297.172 65.585 A 13.84 13.84 0 0 0 299.55 64.45 A 8.926 8.926 0 0 0 301.511 62.907 A 6.784 6.784 0 0 0 303.2 59.8 Z M 162.6 15.6 L 162.6 0 L 167.4 0 L 167.4 15.6 L 162.6 15.6 Z M 149.3 15.6 L 149.3 0 L 154.1 0 L 154.1 15.6 L 149.3 15.6 Z"
              vector-effect="non-scaling-stroke"
            />
          </g>
        </svg>
      </div>
    );
  }
}

export default AnimatedComponent;
