(function(window, document, undefined) {
	'use strict';

	window.addEventListener('load', function() {
		document.body.classList.remove('loading');
	});

	// Google Analytics snippet code
	// (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
	// (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
	// m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
	// })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

	// ga('create', 'UA-58044444-1', 'auto');
	// ga('send', 'pageview');
	
	window.dataLayer = window.dataLayer || [];
	function gtag(){dataLayer.push(arguments);}
	gtag('js', new Date());

	gtag('config', 'G-D9VDXGWGRC');


	// social links events to Google Analytics
	var socialLinks = document.querySelectorAll('.social-links');

	socialLinks.forEach(function(link) {
		link.addEventListener('click', function() {
			// ga('send', 'event', 'Social Links', 'click', link.innerHTML);
			gtag('event', 'click', {
				'event_category': 'social-links',
				'event_label': link.innerHTML.toLocaleLowerCase()
			});
		});
	});
}(window, document));