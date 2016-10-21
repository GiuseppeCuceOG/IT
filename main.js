var main = function() {

	//swap new images
	$('#Beppe').click(function() {
		$(this).toggle()
		$('.Beppe2').prepend("<img id='Beppe3' src='./images/Beppearrabbiato.jpg'/>")
	});

	$('#Renzi').click(function() {
		$(this).toggle()
		$('.Renzi2').prepend("<img id='Renzi3' src='./images/Renziparla.jpg'/>")
	});

	$('#Berlusconi').click(function() {
		$(this).toggle()
		$('.Berlusconi2').prepend("<img id='Berlusconi3' src='./images/Silviocorna.jpg'/>")
	});

	$('#Pizzaaa').click(function() {
		$(this).FadeIn('slow')
	});
};

$(document).ready(main);