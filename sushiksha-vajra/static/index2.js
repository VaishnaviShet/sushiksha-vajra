//    var words,sentences,myString;




    function myFunction() {
        var input=document.querySelectorAll('textarea')[0];
        console.log(input.value.length);
        if(input.value.length == 0)
        {
            document.getElementById("characterCount").textContent = 0;
            document.getElementById("wordCount").textContent = 0;
            document.getElementById("noSpaceCharCount").textContent = 0;
            document.getElementById("sentencesCount").textContent = 0;
        }
        else
        {
            var input=document.querySelectorAll('textarea')[0];
            input.addEventListener('keyup', function(e) {

                words = input.value.match(/\b[-?(\w+)?]+\b/gi);

                sentences = input.value.split(/[.|!|?]+/g);

                myString = input.value.replace(/\s/g, "");

                document.getElementById("characterCount").textContent = input.value.length;
                document.getElementById("wordCount").textContent = words.length;
                document.getElementById("noSpaceCharCount").textContent = myString.length;
                document.getElementById("sentencesCount").textContent = sentences.length-1;
            });
        }
        
    }
