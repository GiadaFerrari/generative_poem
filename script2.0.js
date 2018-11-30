let modal = document.querySelector('.modal');
let main = document.querySelector('.modal section');
let submitButton = document.querySelector('.newPoem');
let inputs = document.querySelectorAll('input');
let myInput = [];
let bday, clr, myTemplate, name, myP;
let output = " ";
let lexicon = new RiLexicon();




function processData() {
    myInput = [];


    inputs.forEach(i => {
        myInput.push(i.value);
        console.log(i.value)

    });



    fetch("poems.json").then(result => result.json()).then(data => selectTemplate(data, myInput));
}




function selectTemplate(template, userData) {
    name = userData[0];
    clr = userData[2].substring(1, 7);
    bday = userData[3].substring(8, 10);

    if (bday > 15) {
        myTemplate = template[0]

    } else {
        myTemplate = template[1]
    }
    console.log(bday.substring(1, 2))

    if (clr.indexOf(bday.substring(1, 2)) > -1) {
        myP = myTemplate.poems[1];
    } else {
        myP = myTemplate.poems[0];
    }
    applyRita();

};

function applyRita() {
    let rs = new RiString(myP);
    let rsWords = rs.words();
    let rsPos = rs.pos();
    let newWord
    console.log(rsPos);
    console.log(rsWords);

    for (i = 0; i < rsWords.length; i++) {
        if (rsWords[i] == "<") {
            output += '<'
        } else if (rsWords[i] == 'br') {
            output += 'br'
        } else if (rsWords[i] == '>') {
            output += '>'
        } else if (rsPos[i] == "nn") {
            newWord = lexicon.randomWord("nn")

            output += newWord;
            output += " ";
        } else {
            output += rsWords[i]
            output += " ";
        }

    }

    showOutput();


}



function showOutput() {
    main.innerHTML = output;
    modal.classList.toggle('hide');


}





submitButton.addEventListener('click', processData);
