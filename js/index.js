const modal = document.querySelector(".modal");
const openModal = document.querySelector(".modal__open");
const closeModal = document.querySelector(".modal__close");
const cartButton = document.querySelector("#cart-btn");
const cartModal = document.querySelector(".cart");


openModal.addEventListener("click", toggleModal);
closeModal.addEventListener("click", toggleModal);

function toggleModal() {
    modal.classList.toggle("modalshow");
}

cartButton.addEventListener("click", cartToggle);

function cartToggle() {
    cartModal.classList.toggle("cartshow");
}