let main_nav = document.querySelector('.site-navigation');
let toggle_nav = document.querySelector('.main-header__toggle');

main_nav.classList.add('site-navigation--close');

toggle_nav.addEventListener('click', function () {
  if (main_nav.classList.contains('site-navigation--open')) {
    main_nav.classList.remove('site-navigation--open');
  } else {
    main_nav.classList.add('site-navigation--open');
  }
});
