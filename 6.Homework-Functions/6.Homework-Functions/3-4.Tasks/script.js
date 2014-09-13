function global() {
    //functions to write in the html file to visualize the JavaScript operations
    function write(element) {
        var node = document.getElementById("write").cloneNode(true);
        document.body.appendChild(node);
        return node.innerHTML = element.toString();
    }

    function writeLine(element) {
        var node = document.getElementById("writeLine").cloneNode(true);
        document.body.appendChild(node);
        return node.innerHTML = element.toString();
    }
	
	function writeTask(element) {
        var node = document.getElementById("task").cloneNode(true);
        document.body.appendChild(node);
        return node.innerHTML = element.toString();
    }
    // End of visualizing functions

    // Task 3
	writeTask('3. Write a function that finds all the occurrences of word in a text.<br />-The search can case sensitive or case insensitive<br />-Use function overloading');
    //Идеята е да се използва  finction pattern и substring във for цикъл. 
    // word + . || word + , || word + -.. и т.н.
	var textString = 'A teenage boy lodged himself in the wheel well of a plane. The plane flew from California to Hawaii. The teenager braved freezing temperatures and had little oxygen. However, he survived. A security camera filmed him in Hawaii. An airport worker noticed the boy, and people took him to hospital. He later told investigators that he was trying to go to Africa to find his mother.';

	function wordCounter(text, word, isCaseSensitive) {
	    write('Case ');
	    isCaseSensitive = isCaseSensitive || false;

	    if (isCaseSensitive) {
	        text = text.toLowerCase();
	        word = word.toLowerCase();
	    }
	    else {
	        write('in');
	    }

	    write('sensitive search for the word "' + word + '" in text:<br />' + text);
	    var counter = 0;

	    function containsWord(string, word) {
	        return new RegExp('(?:[^.\w]|^|^\\W+)' + word + '(?:[^.\w]|\\W(?=\\W+|$)|$)').test(string);
	    }

	    for (var letterIndex = 0; letterIndex < text.length - word.length; letterIndex++) {
	        if (containsWord(text.substring(letterIndex - 1, letterIndex + word.length + 1), word)) {
	            counter++;
	            letterIndex += word.length;
	        }
	    }

	    writeLine('Word ' + word + ' is repeated ' + counter + ' times.');
	}

	wordCounter(textString, 'pLane', true);
	wordCounter(textString, 'pLane');

    //Task 4
	writeTask('4. Write a function to count the number of divs on the web page.');
	function tagCounterInHtml(tag) {
	    var counter = 0,
	        html = document.documentElement.outerHTML,
	        pattern = '<' + tag;

	    for (var letterIndex = 0; letterIndex < html.length - pattern.length; letterIndex++) {
	        if (html.substring(letterIndex, letterIndex + pattern.length) === pattern) {
	            counter++;
	            letterIndex += pattern.length;
	        }
	        //console.log(html.substring(letterIndex, letterIndex + pattern.length));
	    }

	    writeLine('Tag &lt;' + tag + '&gt; is repeated ' + counter + ' times.');
	}

	tagCounterInHtml('div');
	tagCounterInHtml('span');
	tagCounterInHtml('h2');
    // End of tasks
}