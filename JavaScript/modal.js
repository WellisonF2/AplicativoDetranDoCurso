const openModalButton = document.getElementById("open-modal");
const closeModalButton = document.getElementById("close-modal");
const modal = document.getElementById("modal1"); // Use "modal1" ao invés de "modal-1"
const fade = document.getElementById("fade");

const openModalButton1 = document.getElementById("open-modal1");
const closeModalButton1 = document.getElementById("close-modal1");
const modal1 = document.getElementById("modal2");
const fade1 = document.getElementById("fade1");

const openModalButton3 = document.getElementById("open-modal3");
const closeModalButton3 = document.getElementById("close-modal3");
const modal3 = document.getElementById("modal3");
const fade3 = document.getElementById("fade3");



const toggleModal = () => {
    [modal, fade].forEach(element => {
        element.classList.toggle('hide');
    });
}

const toggleModal2 = () => {
    [modal1, fade1].forEach(element => {
        element.classList.toggle('hide');
    });
}

const toggleModal3 = () => {
     [modal3, fade3].forEach(element => {
         element.classList.toggle('hide');
    });
 }

openModalButton.addEventListener('click', toggleModal);
closeModalButton.addEventListener('click', toggleModal);
fade.addEventListener('click', toggleModal);

openModalButton1.addEventListener('click', toggleModal2);
closeModalButton1.addEventListener('click', toggleModal2);
fade1.addEventListener('click', toggleModal2);

openModalButton3.addEventListener('click', toggleModal3);
closeModalButton3.addEventListener('click', toggleModal3);
fade3.addEventListener('click', toggleModal3);
