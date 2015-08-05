(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"/Users/gaowhen/Documents/lab/summer/fe/static/js/_ga.js":[function(require,module,exports){
/**
 * Created by gaowhen on 15/7/21.
 */

if (!$('body').hasClass('dev')) {
	var hm = document.createElement('script')
	hm.src = '//hm.baidu.com/hm.js?001a4013ae38f6fb9d157d1ee374b41c'

	var s = document.getElementsByTagName('script')[0]
	s.parentNode.insertBefore(hm, s)

	(function (i, s, o, g, r, a, m) {
		i['GoogleAnalyticsObject'] = r;
		i[r] = i[r] || function () {
					(i[r].q = i[r].q || []).push(arguments)
				}, i[r].l = 1 * new Date();
		a = s.createElement(o),
				m = s.getElementsByTagName(o)[0];
		a.async = 1;
		a.src = g;
		m.parentNode.insertBefore(a, m)
	})(window, document, 'script', '//www.google-analytics.com/analytics.js', 'ga');

	ga('create', 'UA-11027068-1', 'auto');
	ga('send', 'pageview');

}

},{}]},{},["/Users/gaowhen/Documents/lab/summer/fe/static/js/_ga.js"])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJmZS9zdGF0aWMvanMvX2dhLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiLyoqXG4gKiBDcmVhdGVkIGJ5IGdhb3doZW4gb24gMTUvNy8yMS5cbiAqL1xuXG5pZiAoISQoJ2JvZHknKS5oYXNDbGFzcygnZGV2JykpIHtcblx0dmFyIGhtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jylcblx0aG0uc3JjID0gJy8vaG0uYmFpZHUuY29tL2htLmpzPzAwMWE0MDEzYWUzOGY2ZmI5ZDE1N2QxZWUzNzRiNDFjJ1xuXG5cdHZhciBzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ3NjcmlwdCcpWzBdXG5cdHMucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoaG0sIHMpXG5cblx0KGZ1bmN0aW9uIChpLCBzLCBvLCBnLCByLCBhLCBtKSB7XG5cdFx0aVsnR29vZ2xlQW5hbHl0aWNzT2JqZWN0J10gPSByO1xuXHRcdGlbcl0gPSBpW3JdIHx8IGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0XHQoaVtyXS5xID0gaVtyXS5xIHx8IFtdKS5wdXNoKGFyZ3VtZW50cylcblx0XHRcdFx0fSwgaVtyXS5sID0gMSAqIG5ldyBEYXRlKCk7XG5cdFx0YSA9IHMuY3JlYXRlRWxlbWVudChvKSxcblx0XHRcdFx0bSA9IHMuZ2V0RWxlbWVudHNCeVRhZ05hbWUobylbMF07XG5cdFx0YS5hc3luYyA9IDE7XG5cdFx0YS5zcmMgPSBnO1xuXHRcdG0ucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoYSwgbSlcblx0fSkod2luZG93LCBkb2N1bWVudCwgJ3NjcmlwdCcsICcvL3d3dy5nb29nbGUtYW5hbHl0aWNzLmNvbS9hbmFseXRpY3MuanMnLCAnZ2EnKTtcblxuXHRnYSgnY3JlYXRlJywgJ1VBLTExMDI3MDY4LTEnLCAnYXV0bycpO1xuXHRnYSgnc2VuZCcsICdwYWdldmlldycpO1xuXG59XG4iXX0=
