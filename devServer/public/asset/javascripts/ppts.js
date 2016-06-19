
$(document).ready(docReady);

function docReady() {

	var id = $.UrlParam("id");
	var index = id - 1;

	if(index >= ppts.length) {
		console.log('overflow index=', index);
		return false;
	}

	if(id) {

		$('#notify').remove();
		$('#selector').val(id);

		// show ppt
		var p = ppts[index];
		$('#pptTitle').text(p.title);
		$('#pptSubTitle').text(p.subTitle);
		var src = $('#pptIframe').attr('src').replace(/@url@/g, p.url);
		$('#pptIframe').attr('src', src);
		// console.log('ppt', p);

		// show all
		$('#wrapper').css('display', 'block');
	}
	return false;
}

$('html').on('change', '#selector', function(event){
	var value = $(event.target).val();
	var page = location.pathname.substring(location.pathname.lastIndexOf('/'), location.pathname.length);
	// console.log('value', value);
	window.location = "." + page + "?id=" + value;
	return false;
});
