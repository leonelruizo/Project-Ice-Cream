(() => {
  const refs = {
    openModalBtn: document.querySelector('#footer__modal-open'),
    closeModalBtn: document.querySelector('#footer__modal-close'),
    modal: document.querySelector('#footer__modal-map'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();
