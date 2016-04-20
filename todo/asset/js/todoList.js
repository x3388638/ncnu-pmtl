var BASE_URL = BASE_URL || 'https://richegg.tw/';
var todoList = ( _ => {
	var $list;

	function init() {
		_cacheDOM();
		_bindEvent();
	}

	function _cacheDOM() {
		$list = $('#todoList');
	}

	function _bindEvent() {
		$list.on('click.del', '.btn-del', _handleDel);
	}

	function _handleDel() {
		var $this = $(this);
		var id = $this.parents('.tasks').attr('id');
		$.ajax({
			url: `${BASE_URL}tasks/${id}`, 
			type: 'delete', 
			dataType: 'json', 
			contentType: "application/json; charset=utf-8",
			xhrFields: {
				withCredentials: true
			},
			crossDomain: true, 
			success: function(data) {
				console.log(data);
				$list.find(`#${id}`).remove();
			}, 
			error: function(jqXHR) {
				console.dir(jqXHR);
			}
		});
	}

	function addTask(data) {
		console.dir(data);
		$list
			.find('tbody')
			.append(
				`<tr id=${data.id} class="tasks">
					<td class="taskStatus">
						<button type="button" class="btn btn-default">Yet</button>
					</td>
					<td class="taskName">
						${data.text}
						<span class="glyphicon glyphicon-remove btn-del pull-right" aria-hidden="true"></span>
					</td>
				</tr>`
			);
	}

	function render(list) {
		$list.find('tbody').html('');
		list.forEach(function(val, i) {
			$list
				.find('tbody')
				.append(
					`<tr id=${val.id} class="tasks">
						<td class="taskStatus">
							<button type="button" class="btn btn-default">${val.isDone ? 'Done' : 'Yet'}</button>
						</td>
						<td class="taskName">
							${val.text}
							<span class="glyphicon glyphicon-remove btn-del pull-right" aria-hidden="true"></span>
						</td>
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