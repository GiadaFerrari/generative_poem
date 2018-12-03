let modal = document.querySelector('.modal');
let main = document.querySelector('.modal section');
let submitButton = document.querySelector('.newPoem');
let inputs = document.querySelectorAll('input');
let myInput = [];
let bday, clr, myTemplate, name, myP, n;
let output = " ";
let lexicon = new RiLexicon();
let rhyme = [];





function processData() {
    myInput = [];
    main.innerHTML = " "


    inputs.forEach(i => {
        myInput.push(i.value);

    });

    fetch("poems.json").then(result => result.json()).then(data => selectTemplate(data, myInput));
}




function selectTemplate(template, userData) {
    name = userData[0];
    lname = userData[1]
    clr = userData[2].substring(1, 7);
    bday = userData[3].substring(8, 10);

    if (bday <= 5) {
        myTemplate = template[0]

    } else if (5 < bday && bday <= 10) {
        myTemplate = template[1]
    } else if (10 < bday && bday <= 15) {
        myTemplate = template[2]

    } else if (15 < bday && bday <= 20) {
        myTemplate = template[3]

    } else if (bday > 20) {
        myTemplate = template[4]

    }


    if (clr.indexOf(bday.substring(1, 2)) > -1) {
        myP = myTemplate.poems[0];
    } else if (clr.indexOf(bday.substring(4, 5)) > -1) {
        myP = myTemplate.poems[1];
    } else if (name.indexOf(name.subsring(0 - 1)) > -1) {
        myP = myTemplate.poems[2]
    } else {
        myP = myTemplate.poems[3]
    }

    if (name.length > lname.length) {
        n = name
    } else {
        n = lname
    }
    console.log(n)
    applyRita(n);

};

function applyRita(name) {
    let myIndex = (max) => {
        let min = 0;
        return Math.floor(Math.random() * (max - min + 1)) + min;

        //solution inspired byhttps://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
    }
    let rs = new RiString(myP);
    let rsWords = rs.words();
    let rsPos = rs.pos();
    let newWord
    console.log(rsPos);
    console.log(rsWords);

    rhyme = lexicon.similarBySound(name);

    for (i = 0; i < rsWords.length; i++) {

        rsWords[0].toUpperCase();
        if (rsWords[i] == "<") {
            output += '<'
        } else if (rsWords[i] == 'br') {
            output += 'br'
        } else if (rsWords[i] == '>') {
            output += '>'
        } else if (rsWords[i - 1] == "<") {
            newWord = rhyme[myIndex(rhyme.length)]

            output += newWord;
            output += " ";
        } else if (rsPos[i] == "nn") {
            newWord = lexicon.randomWord('nn');

            output += newWord;
            output += " ";

        } else if (rsPos[i] == "nnp") {
            newWord = lexicon.randomWord('nnp');

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
