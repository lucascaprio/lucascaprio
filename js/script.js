(function(window, document, undefined) {
	'use strict';

	window.addEventListener('load', function() {
		document.body.classList.remove('loading');
	});

	// Google Analytics snippet code
	window.dataLayer = window.dataLayer || [];
	function gtag(){dataLayer.push(arguments);}
	gtag('js', new Date());

	// gtag('config', 'G-D9VDXGWGRC');
	gtag('config', 'UA-58044444-1');

	// social links events to Google Analytics
	var socialLinks = document.querySelectorAll('.social-links');

	socialLinks.forEach(function(link) {
		link.addEventListener('click', function() {
			gtag('event', 'click', {
				'event_category': 'social-links',
				'event_label': link.innerHTML.toLowerCase()
			});
		});
	});
}(window, document));