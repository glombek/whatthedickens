// Returns a random integer between min (included) and max (excluded)
// Using Math.round() will give you a non-uniform distribution!
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}


function getRandomArrayItem(array) {
    var idx = getRandomInt(0,array.length);
    return array[idx];
}

var numQs = 3;
var numAs = 3;

var $quotes = $("#quotes");

//$.each(quotes, function (i, e) {
//    $quotes.append("<blockquote>" + e.quote + "<cite>" + e.source + "</cite></blockquote>");
//});

var usingQuotes = [];

for (var i = 0; i < numQs; i++) {
    var quote = getRandomArrayItem(quotes);
    
    //Make sure we haven't already used this one!
    while(usingQuotes.indexOf(quote) != -1) {
        quote = getRandomArrayItem(quotes);
    }
    
    usingQuotes.push(quote);
    
    var elem = $("<li></li>").data("quote", quote);

    if(i == 0) {
        elem.addClass("current");
    }
    
    elem.append("<blockquote>" + quote.quote + "</blockquote><ul class=\"answers\"></ul>");
    
    var answers = [ quote.source ];
    
    for (var i = 0; i < (numAs - 1); i++) {
        var ans = getRandomArrayItem(sources);
        
        while(answers.indexOf(ans) != -1) {
            ans = getRandomArrayItem(sources);
        }
        
        answers.push(ans);
    }
    
    var offset = getRandomInt(0,numAs);
    var $answers = $(".answers", elem);
    
    for (var i = 0; i < numAs; i++) {
        var idx = i + offset;
        if(idx > answers.length - 1) {
            idx -= answers.length;
        }
        
        $answers.append("<li>" + answers[idx] +  "</li>");
    }
    
    $quotes.append(elem);
}

