const showNavModal = document.querySelector(".navbar-modalBtn");
const navbarModal = document.querySelector(".nav__modal");
const todoMain = document.querySelector(".todo__main");
const todoAddBtn = document.querySelector(".todo__add"); 
const todoModal = document.querySelector(".todo__modal");
const backDrop = document.querySelector(".backdrop");
const todoModalClose = document.querySelector(".todo__nav");

showNavModal.addEventListener("click", showModal);
todoMain.addEventListener("click", closeModal);

todoAddBtn.addEventListener("click", () => {
    todoModal.style.opacity = 1;
    backDrop.style.display = "block"
})
todoModalClose.addEventListener("click", ()=>{
    todoModal.style.opacity = 0;
    backDrop.style.display = "none";
    console.log("close todo new")
})

function showModal() {
    navbarModal.classList.add("modal__appear"); 
}
function closeModal(){
    navbarModal.classList.remove("modal__appear");
    
}

