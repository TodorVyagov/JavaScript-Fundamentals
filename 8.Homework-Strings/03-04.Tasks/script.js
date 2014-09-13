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
    writeTask('3. Write a JavaScript function that finds how many times a substring is contained in a given text (perform case insensitive search).');
    function substringInTextCounter(text, word) {
        if (arguments.length !== 2) {
            writeLine('You must enter text and word to search for as parameters!');
            return;
        }
        else if (typeof (text) !== 'string' || typeof (word) !== 'string') {
            writeLine('Text and word have to be strings!');
            return;
        }

        //to perform case insensitive search:
        text = text.toLowerCase();
        word = word.toLowerCase();
        var counter = 0;
        for (var charIndex = 0; charIndex < text.length - word.length; charIndex++) {
            if (text.substr(charIndex, word.length) === word) {
                counter += 1;
                charIndex += word.length;
            }
        }

        return counter;
    }

    var text = 'We are living in an yellow submarine. We don\'t have anything else. Inside the submarine is very tight. So we are drinking all the day. We will move out of it in 5 days.',
        word = 'in';
    writeLine('In text:');
    writeLine(text);
    writeLine('substring "' + word + '" is repeated ' + substringInTextCounter(text, word) + ' times.');
    word = 'ar';
    writeLine('substring "' + word + '" is repeated ' + substringInTextCounter(text, word) + ' times.');


    // Task 4
    writeTask('4.You are given a text. Write a function that changes the text in all regions:');
    writeLine('<upcase>text</upcase> to uppercase'.replace(/</g, '&lt;'));
    writeLine('<lowcase>text</lowcase> to lowercase'.replace(/</g, '&lt;'));
    writeLine('<mixcase>text</mixcase> to mix casing(random)'.replace(/</g, '&lt;'));

    function applyTags(code) {
        if (typeof (code) !== 'string') {
            writeLine('Type of code must be string!');
            return;
        }

        var start = 0,
            end,
            currentOpenTag = '',
            currentCloseTag = '',
            upperCaseOpen = '<upcase>',
            upperCaseClose = '</upcase>',
            lowerCaseOpen = '<lowcase>',
            lowerCaseClose = '</lowcase>',
            mixedCaseOpen = '<mixcase>',
            mixedCaseClose = '</mixcase>';

        while (true) {
            start = code.indexOf('<', start);
            if (start === -1) {
                return code;
            }

            if (code.toLowerCase().substr(start, upperCaseOpen.length) === upperCaseOpen) {
                currentOpenTag = upperCaseOpen;
                currentCloseTag = upperCaseClose;
            }
            else if (code.toLowerCase().substr(start, lowerCaseOpen.length) === lowerCaseOpen) {
                currentOpenTag = lowerCaseOpen;
                currentCloseTag = lowerCaseClose;
            }
            else if (code.toLowerCase().substr(start, mixedCaseOpen.length) === mixedCaseOpen) {
                currentOpenTag = mixedCaseOpen;
                currentCloseTag = mixedCaseClose;
            }
            else {
                writeLine('Something got wrong!');
                return;
            }

            end = findClosingTag(currentOpenTag, currentCloseTag);
            changeCase(start, end, currentOpenTag);
        }

        function findClosingTag(openTag, closeTag) {
            var counter = 1; // 1 because open tag is found
            var index = code.toLowerCase().indexOf(openTag, start) + 1;

            while (true) {
                if (code.toLowerCase().indexOf(openTag, index) < code.toLowerCase().indexOf(closeTag, index)
                        && code.toLowerCase().indexOf(openTag, index + 1) !== -1) {
                    counter += 1;
                    index = code.toLowerCase().indexOf(openTag, index + 1);
                }
                else if (code.toLowerCase().indexOf(openTag, index) > code.toLowerCase().indexOf(closeTag, index)
                        || code.toLowerCase().indexOf(openTag, index) < 0) {
                    counter--;
                    index = code.toLowerCase().indexOf(closeTag, index);
                }

                if (counter === 0) {
                    return index;
                }
            }
        }

        function changeCase(startIndex, endIndex, tag) {
            var resultCode = code.substring(0, startIndex);
            if (tag === upperCaseOpen) {
                resultCode += code.substring(startIndex + upperCaseOpen.length, endIndex).toUpperCase();
            }
            else if (tag === lowerCaseOpen) {
                resultCode += code.substring(startIndex + lowerCaseOpen.length, endIndex).toLowerCase();
            }
            else if (tag === mixedCaseOpen) {
                resultCode += mixCase(code.substring(startIndex + lowerCaseOpen.length, endIndex));
            }
            else {
                writeLine('Incorrect tag!');
                return;
            }

            resultCode += code.substring(endIndex + tag.length + 1);

            code = resultCode;
        }

        function mixCase(text) {
            var result = '';
            for (var i = 0; i < text.length; i++) {
                var random = Math.floor(Math.random() + 0.5);
                if (random === 1) {
                    result += text[i].toUpperCase();
                }
                else {
                    result += text[i].toLowerCase();
                }
            }

            return result;
        }
    }

    var code = 'We are <mixcase>living</mixcase> in a <upcase>yellow <lowcase>sub</lowcase>marine</upcase>. We <mixcase>don\'t</mixcase> have <lowcase>anything</lowcase> else.';
    writeLine('The code is: ' + code.replace(/</g, '&lt;').replace(/>/g, '&gt;'));
    var newCode = applyTags(code);
    writeLine('After apllying tags: ' + newCode);

    writeLine('.');
    code = 'Normal text <mixcase>mix case text <upcase>upper case text in mix case tag <lowcase>nested low text case </lowcase> some more upper text case in mix case tag</upcase> second part of mixed text case</mixcase> some normal text again <upcase>upper text case</upcase>. We <mixcase>don\'t</mixcase> have <lowcase>anything</lowcase> else.';
    writeLine('The code is: ' + code.replace(/</g, '&lt;').replace(/>/g, '&gt;'));
    newCode = applyTags(code);
    writeLine('After apllying tags: ' + newCode);
    // End of task
}