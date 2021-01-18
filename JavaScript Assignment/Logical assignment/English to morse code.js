function change_text(){
    var letters = [ ' ', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 
    'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
    '1', '2', '3', '4', '5', '6', '7', '8', '9', '0' ];

    var morseLetters = [ "\xa0\xa0\xa0\xa0", ". ___", "___ . . .", "___ . ___ .", "___ . .", 
    ".", ". . ___ .", "___ ___ .", ". . . .", ". .", ". ___ ___ ___", "___ . ___",
    ". ___ . .",  "___ ___", "___ .", "___ ___ ___", ". ___ ___ .", "___ ___ . ___",
    ". ___ .", ". . .", "_", ". . ___", ". . . ___", ". ___ ___", "___ . . ___", 
    "___ . ___ ___", "___ ___ . .", ". ___ ___ ___ ___", ". . ___ ___ ___", ". . . ___ ___",
    ". . . . ___", ". . . . .", "___ . . . .", "___ ___ . . .", "___ ___ ___ . .", 
    "___ ___ ___ ___ .", "___ ___ ___ ___ ___" ];
            
    var textToChange = document.getElementById("english_text").value;
    var newText = "";
    for (var i = 0; i < textToChange.length; i++) {
        for (var j = 0; j < 37; j++) {
            if (textToChange[i].toLowerCase() == letters[j]) {
                newText += morseLetters[j];
                newText += "\xa0\xa0\xa0\xa0";
                break;
            }        
        }
    }
    document.getElementById("output").innerHTML=textToChange+" in morse code is: { "+newText+" }";
    
}