let slideIndex = 0;

function showSlides() {
	const slides = document.querySelectorAll('.slides');
	slideIndex++;

	if (slideIndex >= slides.length) {
		slideIndex = 0;
	}

	for (let i = 0; i < slides.length; i++) {
		slides[i].style.display = 'none';
	}

	slides[slideIndex].style.display = 'block';
	setTimeout(showSlides, 15000);
}

showSlides();

function toggleScreen() {
	document.querySelectorAll('.tela').forEach(tela => {
		tela.classList.toggle('active');
	});
}