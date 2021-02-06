/*
	Hey there!

	This is the client file for your theme. If you need to do any client-side work in javascript,
	this is where it needs to go.

	You can listen for page changes by writing something like this:

	  $(window).on('action:ajaxify.end', function(ev, data) {
		var url = data.url;
		console.log('I am now at: ' + url);
	  });
*/

$(document).ready(function() {
    $(window).on('action:ajaxify.end', function(ev, data){
        if (data.url === 'register') {
            window.location.href =  'https://eltern-team-up.de/registrieren';
        }
        if (data.url === 'groups') {
            window.location.href =  'https://eltern-team-up.de';
        }
        if (data.url === 'users') {
            window.location.href =  'https://eltern-team-up.de';
        }
        if (data.url === 'login' && !app.user.uid) {
            window.location.href =  'https://eltern-team-up.de/login';
        }
    });
});
