$(document).ready(function() {

	$('#myForm').submit(function(event) {
		event.preventDefault();
		$(this).children('input:text').each(function(index, elem) {
			var value = $(elem).val();
			$('ul').append('<li>' + value + '</li>');
			$(elem).val('');
		});
	});

});

$(document).ready(function() {

	var taskText = $('add-task-input').val();

	if (!taskText) {
		alert('Add a task, dummy.');
	} else {
		add-task.push(taskText);
	}
});

$(document).ready(function() {

	var deleteTask = function(e) {
		e.preventDefault();
		$(this).parent().remove();
	}
});

// $('add-todo').submit(function(e) {
	// e.preventDefault(); <--event listener for submitting form & creating todo
// })

// var todoText = $('todo-input').val(); <-- grab the value of the input field

// if (!todoText) {
	// alert('Please enter text to add a todo');
	// return;
	// else {
		// todos.push(todoText);
// 	}
// });

// // createToDo(todoText); <--pass text into 'createToDo' function
// }
// });

// $('#todo-list').on('click', '.delete-button', deleteTodo);
// });<-- event listener that listens to click events on all 'delete-button' elements inside our 'todo-list'

// var createToDo = function(text) { <-- function for creating a todo entry

	// var html = '<li><p> class="todo-item">'' + text + '</p><button type="button" class="delete-button">X</button>,/li>'; <-- define new html
	// using just a string

	// $('#todo-list').append(html); <--using jquery, we call the appendfunction that adds our new html to the todo-list ul element

	// $('#todo-input').val ='' <--wipe out current text from the input field

	// var deleteToDo = function(e) { <--function for deleting specific todo's
		// e.preventDefault();
		// $(this).parent().remove(); <-- using jquery, grab the current element that was clicked (this), then remove the parent of the button
		// using parent() chained with remove()
	// }

	// $('todo-list').sortable();