document.addEventListener("DOMContentLoaded", function(event) {
	const modal = document.querySelector('.modal');
	const modalBtn = document.querySelectorAll('[data-toggle=modal]');
	const closeBtn = document.querySelector('.modal__close');
	const closeModal = document.querySelector('.modal__close-block');
	const switchModal = () => {
		modal.classList.toggle('modal--visible');
	}

	modalBtn.forEach(element => {
		element.addEventListener('click', switchModal);
	});

	closeBtn.addEventListener('click', switchModal);
	closeModal.addEventListener('click', switchModal);
	document.body.onkeyup = function(e){
    if(e.keyCode == 32){
				switchModal();
    }
}
});