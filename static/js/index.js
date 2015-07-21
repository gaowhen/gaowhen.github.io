(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"/Users/gaowhen/Documents/lab/summer/fe/static/js/index.js":[function(require,module,exports){
$('.btn-build').on('click', function (e) {
	e.preventDefault()

	$.post('/build')
			.done(function (res) {
				console.log(res)
			})

	return false
})

$('.btn-del').on('click', function (e) {
	e.preventDefault()

	var $this = $(this)
	var uri = $this.attr('href')
	var $entry = $this.parents('.entry')

	$.post(uri)
			.done(function (res) {
				if (res.r) {
					$entry.slideUp()
				}
			})

	return false
})

},{}]},{},["/Users/gaowhen/Documents/lab/summer/fe/static/js/index.js"])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJmZS9zdGF0aWMvanMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCIkKCcuYnRuLWJ1aWxkJykub24oJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcblx0ZS5wcmV2ZW50RGVmYXVsdCgpXG5cblx0JC5wb3N0KCcvYnVpbGQnKVxuXHRcdFx0LmRvbmUoZnVuY3Rpb24gKHJlcykge1xuXHRcdFx0XHRjb25zb2xlLmxvZyhyZXMpXG5cdFx0XHR9KVxuXG5cdHJldHVybiBmYWxzZVxufSlcblxuJCgnLmJ0bi1kZWwnKS5vbignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xuXHRlLnByZXZlbnREZWZhdWx0KClcblxuXHR2YXIgJHRoaXMgPSAkKHRoaXMpXG5cdHZhciB1cmkgPSAkdGhpcy5hdHRyKCdocmVmJylcblx0dmFyICRlbnRyeSA9ICR0aGlzLnBhcmVudHMoJy5lbnRyeScpXG5cblx0JC5wb3N0KHVyaSlcblx0XHRcdC5kb25lKGZ1bmN0aW9uIChyZXMpIHtcblx0XHRcdFx0aWYgKHJlcy5yKSB7XG5cdFx0XHRcdFx0JGVudHJ5LnNsaWRlVXAoKVxuXHRcdFx0XHR9XG5cdFx0XHR9KVxuXG5cdHJldHVybiBmYWxzZVxufSlcbiJdfQ==
