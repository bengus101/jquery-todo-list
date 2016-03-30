$(document).ready(function() {}

	$('.myForm').submit(function(event) {
		console.log(this)
		event.preventDefault();

		$(this).children('input: ul').each(function(index, elem) {
			var value = $(elem).val();
			$('body').append('<h2>' + value + '</h2>');
			$(elem).val('');
		});
	});

});