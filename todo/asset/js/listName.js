var BASE_URL = BASE_URL || 'https://richegg.tw/';
var listName = ( _ => {
	var $listNameWrap;

	function init() {
		_cacheDOM();
		_bindEvent();
	}

	function _cacheDOM() {
		$listNameWrap = $('#listNameWrap');
	}

	function _bindEvent() {
		$listNameWrap.on('click.setList', '#btn-setList', handleSetList);
	}

	function handleSetList(listName = $listNameWrap.find('#listName').val()) {
		if(listName) {
			$.ajax({
				url: `BASE_URL${tokens}`, 
				type: 'post', 
				dataType: 'json', 
				data: {
					listName
				}, 
				crossDomain: true, 
				success: function(data) {
					todoList.render(data.tasks);
				}, 
				error: function(jqXHR) {
					console.dir(jqXHR);
				}
			});
		}
	}

	return {
		init, 
		handleSetList
	}
})();