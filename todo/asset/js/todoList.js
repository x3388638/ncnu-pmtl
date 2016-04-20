var BASE_URL = BASE_URL || 'https://richegg.tw/';
var todoList = ( _ => {
	var $list;

	function init() {
		_cacheDOM();
		_bindEvent();
		_getTasks();
	}

	function _cacheDOM() {
		$list = $('#todoList');
	}

	function _bindEvent() {

	}

	function _getTasks() {
		if(document.cookie.length) {
			// $.ajax({});
		}
	}

	function addTask(data) {
		console.dir(data);
		$list
			.find('tbody')
			.append(
				`<tr>
					<td id=${data.id} class="taskStatus">
						<button type="button" class="btn btn-default">Yet</button>
					</td>
					<td>${data.text}</td>
				</tr>`
			);
	}

	function render(list) {
		$list.find('tbody').html('');
		list.forEach(function(val, i) {
			$list
				.find('tbody')
				.append(
					`<tr>
						<td id=${data.id} class="taskStatus">
							<button type="button" class="btn btn-default">${data.isDone ? 'Done' : 'Yet'}</button>
						</td>
						<td>${data.text}</td>
					</tr>`
				);
		});
	}

	return {
		init, 
		addTask, 
		render
	}
})();