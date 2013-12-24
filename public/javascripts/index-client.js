setInterval(function () {
	$.get( "/twits/getTweets", function (data) {
		$('#twitcontainer')[0].innerHTML = data;
		console.log(data)
	});
}, 2000)