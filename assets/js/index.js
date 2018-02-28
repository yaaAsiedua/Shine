var slideIndex = 0;
//showSlides();
var submitButton = document.getElementById("submitButton");
var nameInput = document.getElementById("nameInput");

/*
We took it out bcos there is a bug in there

function showSlides() {
	var i;
	var slides = document.getElementById("carouselExampleSlidesOnly");
	for (i=0; i < carousel-i; i++) {
		slides[i].style.display = "none";
	}
	slideIndex++;
	if (slideIndex > slides.length) {slideIndex = 1}
		slides[slideIndex-1].style.display = "block";
	setTimeout(showSlides, 1000);
}
*/

function validateContactForm() {
	if (nameInput.value==""){
		alert("Please enter your name");
	}else{
		alert("Valid");
	}
}



submitButton.addEventListener('click', validateContactForm);

