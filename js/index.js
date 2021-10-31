const modal = document.querySelector(".modal");
const openModal = document.querySelector(".modal__open");
const closeModal = document.querySelector(".modal__close");

openModal.addEventListener("click", toggleModal);
closeModal.addEventListener("click", toggleModal);

function toggleModal() {
    modal.classList.toggle("modalshow");
}