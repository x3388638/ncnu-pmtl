var BASE_URL = BASE_URL || 'https://richegg.tw/';
var inputBar = ( _ => {
	var $inputWrap;

	function init() {
		_cacheDOM();
		_bindEvent();
	}

	function _cacheDOM() {
		$inputWrap = $('#inputWrap');
	}

	function _bindEvent() {
		$inputWrap.on('click.addTask', '#btn-add', _handleAddTask);
	}

	function _handleAddTask() {
		if(document.cookie.length) {
			var text = $inputWrap.find('#newTask').val();
			if(text) {
				$.ajax({
					url: `${BASE_URL}tasks`, 
					type: 'post', 
					dataType: 'json', 
					data: {
						text
					}, 
					crossDomain: true, 
					success: function(data) {
						todoList.addTask(data)
					}, 
					error: function(jqXHR) {
						console.dir(jqXHR);
					}
				});
			}
		} else {
			alert('Select a list name first');
		}
	}

	return {
		init
	}
})();