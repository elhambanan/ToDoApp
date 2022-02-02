const showModal = document.querySelector(".modal__show")


showBtn.addEventListener("click", showModal);
closeBtn.addEventListener("click", closeModal);

function showModal(params) {
    modalBox.classList.add("modal__appear"); 
}
function closeModal(){
    modalBox.classList.remove("modal__appear");
}