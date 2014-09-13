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

    // Task 8
    writeTask('8. Write a JavaScript function that replaces in a HTML document given as string all the tags <a href="…">…</a> with corresponding tags [URL=…]…/URL].'.replace(/</g, '&lt;'));
    /*<p>Please visit <a href="http://academy.telerik.com">our site</a> to choose a training course.
    Also visit <a href="www.devbg.org">our forum</a> to discuss the courses.</p>

    <p>Please visit [URL=http://academy.telerik.com]our site[/URL] to choose a training course.
    Also visit [URL=www.devbg.org]our forum[/URL] to discuss the courses.</p>*/

    function replaceAtagWithUrlTag(code) {
        var startAtagOpen = '<a href="';
        var startAtagClose = '">';
        var endAtag = '</a>';

        var startUrlTagOpen = '[URL=';
        var startUrlTagClose = ']';
        var endUrlTag = '[/URL]';

        var startAtagOpenIndex = code.indexOf(startAtagOpen);
        var startAtagCloseIndex;
        var endAtagIndex;
        var resultCode = code.substring(0, startAtagOpenIndex);

        while (startAtagOpenIndex >= 0) {
            resultCode += startUrlTagOpen;
            startAtagCloseIndex = code.indexOf(startAtagClose, startAtagOpenIndex);
            resultCode += code.substring(startAtagOpenIndex + startAtagOpen.length, startAtagCloseIndex);
            resultCode += startUrlTagClose;
            endAtagIndex = code.indexOf(endAtag, startAtagCloseIndex);
            resultCode += code.substring(startAtagCloseIndex + startAtagClose.length, endAtagIndex);
            resultCode += endUrlTag;

            startAtagOpenIndex = code.indexOf(startAtagOpen, endAtagIndex);

            if (startAtagOpenIndex >= 0) {
                resultCode += code.substring(endAtagIndex + endAtag.length, startAtagOpenIndex);
            }
            else {
                resultCode += code.substring(endAtagIndex + endAtag.length);
            }
        }

        return resultCode;
    }

    var code = '<p>Please visit <a href="http://academy.telerik.com">our site</a> to choose a training course. Also visit <a href="www.devbg.org">our forum</a> to discuss the courses.</p>';
    writeLine(code.replace(/</g, '&lt;'));
    writeLine('After replacing tags code looks:');
    var replaced = replaceAtagWithUrlTag(code);
    writeLine(replaced.replace(/</g, '&lt;'));

    // Task 9
    writeTask('9. Write a function for extracting all email addresses from given text. All substrings that match the format <identifier>@<host>…<domain> should be recognized as emails. Return the emails as array of strings.');

    function extractorOfEmailsFromText(text) {
        var words = text.split(' ');

        for (var i = 0; i < words.length; i++) {
            //trim the ending dot or comma of a word or email.
            var currentWord = words[i];
            if (currentWord[currentWord.length - 1] === '.' || currentWord[currentWord.length - 1] === ',') {
                words[i] = currentWord.substring(0, currentWord.length - 1);
            }
        }

        var emails = [];
        for (var i = 0; i < words.length; i++) {
            if (/[\w.]{3,20}@[\w]{2,20}[.]{1}[\w.]{2,6}/.exec(words[i])) {
                emails.push(words[i]);
            }
        }

        return emails;
    }

    var text = 'By simply sending an email to cellnumber@myboostmobile.com. for example, cellnumber@tmomail, can also be applied to your peter@hotmail.com DIY projects. For example, if you were aj@yahoo.com creating a DIY security system, 444@abv.net you could number@gmail.com use your computer’s parallel port to automatically text you if your alarm goes off.';
    var emails = extractorOfEmailsFromText(text);
    writeLine('Text: ' + text);
    writeLine('Valid emails are: ' + emails.join(', '));


    // Task 10
    writeTask('10. Write a program that extracts from a given text all palindromes, e.g. "ABBA", "lamal", "exe".');

    function palindromeExtractor(text) {
        var words = text.split(' ');
        var palindromes = [];

        for (var i = 0; i < words.length; i++) {
            var currentWord = words[i].toLowerCase(); //the search is case insensitive
            if (currentWord[currentWord.length - 1] === '.' || currentWord[currentWord.length - 1] === ',' || currentWord[currentWord.length - 1] === '!'
                || currentWord[currentWord.length - 1] === '?' || currentWord[currentWord.length - 1] === '-') {
                currentWord = currentWord.substring(0, currentWord.length - 1);
            }

            var isPalindrome = true;
            for (var letterIndex = 0; letterIndex <= parseInt(currentWord.length / 2); letterIndex++) {
                if (currentWord[letterIndex] !== currentWord[currentWord.length - 1 - letterIndex]) {
                    isPalindrome = false;
                    break;
                }
            }

            if (isPalindrome) {
                palindromes.push(currentWord);
            }
        }

        return palindromes;
    }

    text = 'Wrirw a program exe, that extracts ABBA. from a kapak given boob text all dates that match evitative the rice. Display them lamal in the standard date format for Canada.';
    writeLine('Text is: ' + text);
    var palindromes = palindromeExtractor(text);
    writeLine('Palindromes are: ' + palindromes.join(', '));
    // End of tasks
}