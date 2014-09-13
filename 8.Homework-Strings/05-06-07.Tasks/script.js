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

    // Task 5
    writeTask('5. Write a function that replaces non breaking white-spaces in a text with &amp;nbsp;');
    function replaceInText(text, wordToReplace, newWord) {
        pattern = new RegExp(wordToReplace, 'g');
        writeLine('"' + pattern + '"');
        var result = text.replace(pattern, newWord);
        return result;
    }

    var text = 'Write a function that replaces non breaking white-spaces in a text with symbol.';
    var replacedText = replaceInText(text, ' ', '&amp;nbsp;');
    writeLine('Text is: "' + text + '"');
    writeLine('Replaced " " with "&amp;nbsp;": "' + replacedText + '"');
    console.log(replacedText);

    // Task 6
    writeTask('6. Write a function that extracts the content of a html page given as text. The function should return anything that is in a tag, without the tags:');

    function htmlExtractor(htmlFile) {
        var extracted = '';
        var counter = 0;
        for (var i = 0; i < htmlFile.length; i++) {
            if (htmlFile[i] === '<') {
                counter++;
            } else if (htmlFile[i] === '>') {
                counter--;
            } else if (counter === 0) {
                extracted += htmlFile[i];
            }
        }

        return extracted;
    }

    var html = '<html><head><title>Sample site</title></head><body><div>text<div>more text</div>and more...</div>in body</body></html>';
    var extracted = htmlExtractor(html);
    writeLine('HTML: ' + html.replace(/</g, '&lt;'));
    writeLine('Extracted text is: ' + extracted);

    // Task 7
    writeTask('7. Write a script that parses an URL address given in the format:<br />[protocol]://[server]/[resource]<br />and extracts from it the [protocol], [server] and [resource] elements. Return the elements in a JSON object.');
    /*For example from the URL http://www.devbg.org/forum/index.php the following information should be extracted:
    {protocol: "http",
    server: "www.devbg.org", 
    resource: "/forum/index.php"} */

    function parseUrl(url) {
        var indexOfProtocol = url.indexOf('://');
        var protocol = url.substring(0, indexOfProtocol);
        var server = url.substring(indexOfProtocol + 3, url.indexOf('/', indexOfProtocol + 3));
        var resource = url.substring(url.indexOf('/', indexOfProtocol + 3));

        return {
            protocol: protocol,
            server: server,
            resource: resource
        };
    }

    var urlAddress = 'http://www.devbg.org/forum/index.php';
    var jsonUrl = parseUrl(urlAddress);
    writeLine('URL is: ' + urlAddress);
    for (var property in jsonUrl) {
        writeLine(property + ' = ' + jsonUrl[property]);
    }

    urlAddress = 'https://www.google.bg/search?q=JS+name+of+property&oq=JS+name+of+property&aqs=chrome..69i57.6967j0j7&sourceid=chrome&es_sm=122&ie=UTF-8';
    jsonUrl = parseUrl(urlAddress);
    writeLine('URL is: ' + urlAddress);
    for (var property in jsonUrl) {
        writeLine(property + ' = ' + jsonUrl[property]);
    }
    // End of tasks
}