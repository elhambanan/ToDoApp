const showNavModal = document.querySelector(".navbar-modalBtn");
const navbarModal = document.querySelector(".nav__modal");

showNavModal.addEventListener("click", showModal);
// closeBtn.addEventListener("click", closeModal);

function showModal(params) {
    navbarModal.classList.add("modal__appear"); 
}
function closeModal(){
    modalBox.classList.remove("modal__appear");
}