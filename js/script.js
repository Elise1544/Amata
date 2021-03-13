'use strict';

(function () {

  const name = document.querySelectorAll('.items__name:not(.name)');
  const modal = document.querySelectorAll('.modal');

  for (let i = 0; i < name.length; i++) {
    name[i].addEventListener('mouseover', function() {
      modal[i].classList.add('modal--active');
    });
    name[i].addEventListener('mouseout', function() {
      modal[i].classList.remove('modal--active');
    });


  }
})();
