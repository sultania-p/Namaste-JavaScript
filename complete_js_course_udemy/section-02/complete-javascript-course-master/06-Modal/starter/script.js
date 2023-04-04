'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');

const openModal = function () {
  // use the classlist to update class properties -->> remove method on each modal item
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

for (let i = 0; i < btnsOpenModal.length; i++) {
  btnsOpenModal[i].addEventListener('click', openModal);
}

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

// close the modal -> close-modal class
// do not call the method closeModal as it will immediately call as js run the code, call on click
btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);
