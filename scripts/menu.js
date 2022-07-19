function ready(fn) {
  if (document.readyState != 'loading') {
    fn();
  } else {
    document.addEventListener('DOMContentLoaded', fn);
  }
}

ready(function () {
  //splash animation
  const splash = document.querySelector('.splash');
  splash.style.setProperty('--animate-duration', '2.0s');
  splash.classList.add('animate__animated', 'animate__zoomIn');
  splash.addEventListener('animationend', () => {
    splash.classList.add('animate__zoomOut');
    setTimeout(function () {
      const menu = document.querySelector('.menu');
      menu.style.setProperty('--animate-duration', '2.0s');
      menu.classList.add('active', 'animate__animated', 'animate__zoomIn');
    }, 800);
  });

  //open pdf on load
  setTimeout(function () {
    document.getElementById('download-link').click();
  }, 4000);
});