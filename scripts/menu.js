function ready(fn) {
    if (document.readyState != 'loading'){
      fn();
    } else {
      document.addEventListener('DOMContentLoaded', fn);
    }
  }

  ready(function(){
      const splash = document.querySelector('.splash');
      splash.style.setProperty('--animate-duration', '1.5s');
      splash.classList.add('animate__animated', 'animate__zoomIn');
      splash.addEventListener('animationend', () => {
        splash.classList.add('animate__zoomOut');
        const menu = document.querySelector('.menu');
        menu.style.setProperty('--animate-duration', '1.5s');
        menu.classList.add('active', 'animate__animated', 'animate__zoomIn');
      });
  });