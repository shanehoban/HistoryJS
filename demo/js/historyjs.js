var HistoryJS = {};

	// What you want your URL to look like
	HistoryJS.root = "#/";

	/*
		Default File and loading container
	*/
	HistoryJS.defaultFile = 'views/view1.php?test=tester12345';
	HistoryJS.defaultContainer = 'main-content';

	/*
		File and file root locations
	*/
	HistoryJS.fileType = ".php";
	HistoryJS.fileRoot = 'views/';

/* ################################################################################# */

HistoryJS.regex = new RegExp(HistoryJS.fileRoot + '|' + HistoryJS.fileType, 'g');

HistoryJS.pushHistory = function(state, skipSave){
	var uri = HistoryJS.root + state.file.replace(HistoryJS.regex, '');
	if(!skipSave){
		history.pushState(state, null, uri);
	} else {
		history.replaceState(history.state, null, uri);
	}
};

HistoryJS.loadContent = function(state, skipSave){
	$('[data-history-js-content="' + state.contentId + '"]').load(state.file);
	HistoryJS.pushHistory(state, skipSave);
};

HistoryJS.addHistoryJSLinkListener = function(link, contentId){
	$(link).on('click', function(){
		var file = $(this).attr('data-history-js-link');
		var skipSave = $(this).attr('data-history-js-skip-history') ? true : false;
		var state = {
				file : file,
				contentId: contentId
			};
		HistoryJS.loadContent(state, skipSave);
	});
};

$(document).ready(function(){
	var linkContainers = $('[data-history-js-container]');
		for(var i = 0; i < linkContainers.length; i++){
			var container = linkContainers[i];
			var links = $(container).find('[data-history-js-link]');
			var contentId = $(container).attr('data-history-js-container');
			// if the links are contained in a container
			if(links.length > 0){
				for(var x = 0; x < links.length; x++){
					HistoryJS.addHistoryJSLinkListener(links[x], contentId);
				}
			// else if the links are singular, not in a container
			} else {
				if($(container).attr('data-history-js-link')){
					HistoryJS.addHistoryJSLinkListener(container, contentId);
				}
			}
		} // end for all containers

		var leftover = location.href.slice(location.href.indexOf(HistoryJS.root)+HistoryJS.root.length, location.href.length);

		if(location.href.indexOf(HistoryJS.root) === -1 || leftover.length === 0){
			var state = {
				file : HistoryJS.defaultFile,
				contentId: HistoryJS.defaultContainer
			};
			var uri = HistoryJS.root + state.file.replace(HistoryJS.regex, '');
			$('[data-history-js-content="' + HistoryJS.defaultContainer + '"]').load(HistoryJS.defaultFile);
			history.replaceState(state, null, uri);
		} else {
			var uri = location.href.slice(location.href.indexOf(HistoryJS.root)).replace('?', HistoryJS.fileType + '?').replace(HistoryJS.root, HistoryJS.fileRoot);
				uri = (uri.indexOf(HistoryJS.fileType) === -1) ? uri + HistoryJS.fileType : uri;
			var state = {
				file : uri,
				contentId: HistoryJS.defaultContainer
			};
			$('[data-history-js-content="' + HistoryJS.defaultContainer + '"]').load(uri);
			uri = HistoryJS.root + state.file.replace(HistoryJS.regex, '');
			history.replaceState(state, null, uri);
		}
});

window.addEventListener('popstate', function(e) {
	console.log(e);
	console.log(location.hash);
	var skipSave = true;
	if(e.state){
		HistoryJS.loadContent(e.state, skipSave);
	}
});