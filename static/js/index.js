(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"/Users/gaowhen/Documents/lab/summer/fe/static/js/index.js":[function(require,module,exports){
var $doc = $(document)

$doc.on('click', '.btn-build', function (e) {
	e.preventDefault()

	$.post('/build')
			.done(function (res) {
				console.log(res)
			})

	return false
})

$doc.on('click', '.btn-del', function (e) {
	e.preventDefault()

	var $this = $(this)
	var pid = $this.data('pid')
	var $entry = $this.parents('.entry')

	$.post('/posts/' + pid + '/del')
			.done(function (res) {
				if (res.r) {
					$entry.slideUp()
				}
			})

	return false
})

},{}]},{},["/Users/gaowhen/Documents/lab/summer/fe/static/js/index.js"])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJmZS9zdGF0aWMvanMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwidmFyICRkb2MgPSAkKGRvY3VtZW50KVxuXG4kZG9jLm9uKCdjbGljaycsICcuYnRuLWJ1aWxkJywgZnVuY3Rpb24gKGUpIHtcblx0ZS5wcmV2ZW50RGVmYXVsdCgpXG5cblx0JC5wb3N0KCcvYnVpbGQnKVxuXHRcdFx0LmRvbmUoZnVuY3Rpb24gKHJlcykge1xuXHRcdFx0XHRjb25zb2xlLmxvZyhyZXMpXG5cdFx0XHR9KVxuXG5cdHJldHVybiBmYWxzZVxufSlcblxuJGRvYy5vbignY2xpY2snLCAnLmJ0bi1kZWwnLCBmdW5jdGlvbiAoZSkge1xuXHRlLnByZXZlbnREZWZhdWx0KClcblxuXHR2YXIgJHRoaXMgPSAkKHRoaXMpXG5cdHZhciBwaWQgPSAkdGhpcy5kYXRhKCdwaWQnKVxuXHR2YXIgJGVudHJ5ID0gJHRoaXMucGFyZW50cygnLmVudHJ5JylcblxuXHQkLnBvc3QoJy9wb3N0cy8nICsgcGlkICsgJy9kZWwnKVxuXHRcdFx0LmRvbmUoZnVuY3Rpb24gKHJlcykge1xuXHRcdFx0XHRpZiAocmVzLnIpIHtcblx0XHRcdFx0XHQkZW50cnkuc2xpZGVVcCgpXG5cdFx0XHRcdH1cblx0XHRcdH0pXG5cblx0cmV0dXJuIGZhbHNlXG59KVxuIl19
