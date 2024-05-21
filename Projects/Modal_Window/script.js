'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
//querySelector will only allow you to return the first of the queries
const btnCloseModal = document.querySelector('.close-modal');
//querySelectorAll will allow you to return all the different queries that have the same indetifiers.
const btnsShowModal = document.querySelectorAll('.show-modal');
console.log(btnsShowModal);
const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};
const openModal = function () {
  //no dots that is only for the selector
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

for (let i = 0; i < btnsShowModal.length; i++) {
  btnsShowModal[i].addEventListener('click', openModal);
}
btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);
document.addEventListener('keydown', function (event) {
  console.log(event.key);

  if (event.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
