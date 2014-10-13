//list all the quotes as a test
var $quotes = $("#quotes");
$.each(quotes, function (i, e) {
    $quotes.append("<blockquote>" + e.quote + "<cite>" + e.source + "</cite></blockquote>");
});