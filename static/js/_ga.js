(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"/Users/gaowhen/Documents/lab/summer/fe/static/js/_ga.js":[function(require,module,exports){
/**
 * Created by gaowhen on 15/7/21.
 */

if (!$('body').hasClass('dev')) {
	// baidu
	var hm = document.createElement('script')
	hm.src = '//hm.baidu.com/hm.js?001a4013ae38f6fb9d157d1ee374b41c'

	var s = document.getElementsByTagName('script')[0]
	s.parentNode.insertBefore(hm, s)

	// google
	window['GoogleAnalyticsObject'] = 'ga'

	window['ga'] = window['ga'] ||
		function () {
			(window['ga'].q = window['ga'].q || []).push(arguments)
		}

	window['ga'].l = 1 * new Date()

	var a = document.createElement('script')
	a.src = '//www.google-analytics.com/analytics.js'
	var sc = document.getElementsByTagName('script')[0]

	sc.parentNode.insertBefore(a, sc)

	ga('create', 'UA-11027068-1', 'auto')
	ga('send', 'pageview')
}

},{}]},{},["/Users/gaowhen/Documents/lab/summer/fe/static/js/_ga.js"])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJmZS9zdGF0aWMvanMvX2dhLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCIvKipcbiAqIENyZWF0ZWQgYnkgZ2Fvd2hlbiBvbiAxNS83LzIxLlxuICovXG5cbmlmICghJCgnYm9keScpLmhhc0NsYXNzKCdkZXYnKSkge1xuXHQvLyBiYWlkdVxuXHR2YXIgaG0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKVxuXHRobS5zcmMgPSAnLy9obS5iYWlkdS5jb20vaG0uanM/MDAxYTQwMTNhZTM4ZjZmYjlkMTU3ZDFlZTM3NGI0MWMnXG5cblx0dmFyIHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnc2NyaXB0JylbMF1cblx0cy5wYXJlbnROb2RlLmluc2VydEJlZm9yZShobSwgcylcblxuXHQvLyBnb29nbGVcblx0d2luZG93WydHb29nbGVBbmFseXRpY3NPYmplY3QnXSA9ICdnYSdcblxuXHR3aW5kb3dbJ2dhJ10gPSB3aW5kb3dbJ2dhJ10gfHxcblx0XHRmdW5jdGlvbiAoKSB7XG5cdFx0XHQod2luZG93WydnYSddLnEgPSB3aW5kb3dbJ2dhJ10ucSB8fCBbXSkucHVzaChhcmd1bWVudHMpXG5cdFx0fVxuXG5cdHdpbmRvd1snZ2EnXS5sID0gMSAqIG5ldyBEYXRlKClcblxuXHR2YXIgYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpXG5cdGEuc3JjID0gJy8vd3d3Lmdvb2dsZS1hbmFseXRpY3MuY29tL2FuYWx5dGljcy5qcydcblx0dmFyIHNjID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ3NjcmlwdCcpWzBdXG5cblx0c2MucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoYSwgc2MpXG5cblx0Z2EoJ2NyZWF0ZScsICdVQS0xMTAyNzA2OC0xJywgJ2F1dG8nKVxuXHRnYSgnc2VuZCcsICdwYWdldmlldycpXG59XG4iXX0=
