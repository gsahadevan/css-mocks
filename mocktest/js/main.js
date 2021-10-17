function loadFile() {
    var input, file, fr;

    if (typeof window.FileReader !== 'function') {
        alert("The file API isn't supported on this browser yet.");
        return;
    }

    input = document.getElementById('fileinput');
    if (!input) {
        alert("Um, couldn't find the fileinput element.");
    } else if (!input.files) {
        alert("This browser doesn't seem to support the `files` property of file inputs.");
    } else if (!input.files[0]) {
        alert("Please select a file before clicking 'Load'");
    } else {
        file = input.files[0];
        fr = new FileReader();
        fr.onload = receivedText;
        fr.readAsText(file);
    }

    function receivedText(e) {

        fetch("/static/data/chap1.json")
            .then(response => response.json())
            .then(json => console.log(json));

        let lines = e.target.result;
        var firstObj = JSON.parse(lines);
        
        var ctr = 0;
        var htmlText = '';

        var json = shuffle(firstObj);
        json.forEach(function(obj) {
            // console.log(obj.solution);
            ctr++;
            htmlText += '<br>';
            htmlText += '<fieldset>';
            htmlText += '<legend> Question ' + ctr + ' of ' + json.length + ' </legend>';
            htmlText += '<p class="question">' + obj.question + '</p>';
            var loopVar = 0;

            var jsonOptions = shuffle(obj.options);

            jsonOptions.forEach(function(option) {
                loopVar++;
                var opt_text = option.substring(2);
                if (obj.solution.includes(option.substring(0, 2).trim())) {
                    htmlText += '<br><input type="radio" id="' + ctr + '_' + loopVar + '" name="' + ctr + '">';
                    htmlText += '<div class="' + ctr + '" style="display: inline;"><label class="option"> ' + opt_text + '</label></div>';
                } else {
                    htmlText += '<br><input type="radio" id="' + ctr + '_' + loopVar + '" name="' + ctr + '"><label class="option"> ' + opt_text + '</label>';
                    htmlText += '<div class="' + ctr + '" style="display: none;"></div>';
                }
            })
            htmlText += '</fieldset>';
        });
        $('body').append(htmlText);
        $(document).ready(function() {
            $('input[type=radio]').on('change', function(event) {
                var test = event.target.id.split("_", 2);
                $("." + test[0]).css("color", "green");
                $("." + test[0]).css("border", "solid 2px");
                $("." + test[0]).css("font-weight", "bold");
            });
        });
   }
}

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;
  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
}