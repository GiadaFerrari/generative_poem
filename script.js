let main = document.querySelector('main');
let button = document.querySelector('.newPoem');

/*API URL*/
const coldBirdsAPI = "https://raw.githubusercontent.com/dariusk/corpora/master/data/animals/birds_antarctica.json";
const veggieAPI = "https://raw.githubusercontent.com/dariusk/corpora/master/data/foods/vegetables.json";
const riverAPI = "https://raw.githubusercontent.com/dariusk/corpora/master/data/geography/rivers.json";
const adjAPI = "https://raw.githubusercontent.com/dariusk/corpora/master/data/words/adjs.json";
const verbAPI = "https://raw.githubusercontent.com/dariusk/corpora/master/data/words/verbs_with_conjugations.json";



/*arrays*/

let birds = [];
let food = [];
let rivers = [];
let infinite = [];
let gerund = [];
let adjs = [];

/*setup*/

function setup() {
    fetchEvents(coldBirdsAPI, 'birdy');
    fetchEvents(veggieAPI, 'veggie');
    fetchEvents(riverAPI, 'river');
    fetchEvents(adjAPI, 'adj');
    //  fetchEvents(verbAPI, 'gerund');
    fetchEvents(verbAPI, 'verb');



}

/*fetch*/
function fetchEvents(API, kind) {

    fetch(API).then(result => result.json()).then(data => fillArray(data, kind));
}


function fillArray(data, type) {

    if (type == 'birdy') {
        data.birds.forEach(b => {
            b.members.forEach(bm => {
                pushToArray(bm, birds)
            })
        })

    } else if (type == 'veggie') {
        data.vegetables.forEach(v =>
            pushToArray(v, food)

        )
    } else if (type == 'river') {
        data.rivers.forEach(r =>
            pushToArray(r.name, rivers)

        )
    } else if (type == 'adj') {
        //        console.log(data.adjs)
        data.adjs.forEach(a =>
            pushToArray(a, adjs)

        )
        //  fillTemplate(templateDark);

    } else if (type == 'verb') {
        data.forEach(v => {
            pushToArray(v.infinitive[0], infinite);
            pushToArray(v.gerund[0], gerund);
        })
        fillTemplate(templateDark);
    }

}

function pushToArray(el, array) {
    array.push(el);
}


/*TEMPLATES*/

const templateDark = document.querySelector('template.dark').content;


function fillTemplate(template) {
    main.innerHTML = "";


    if (template == templateDark) {

        console.log("im filling out template")
        let myIndex = (max) => {
            let min = 0;
            return Math.floor(Math.random() * (max - min + 1)) + min;

            //solution inspired byhttps://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
        }
        const clone = template.cloneNode(true);
        let myBird = birds[myIndex(birds.length - 1)];
        let myFood = food[myIndex(food.length - 1)];
        let myRiver = rivers[myIndex(rivers.length - 1)];


        clone.querySelectorAll('.bird').forEach(birdSpan => birdSpan.textContent = myBird);
        clone.querySelector('.food').textContent = myFood;
        clone.querySelector('.river').textContent = myRiver;
        clone.querySelectorAll('.adj').forEach(a => {
            a.textContent = adjs[myIndex(adjs.length - 1)];
        })
        clone.querySelector('.gerund').textContent = gerund[myIndex(gerund.length - 1)]
        clone.querySelector('.infinite').textContent = infinite[myIndex(infinite.length - 1)]




        main.appendChild(clone);


    }

}

button.addEventListener('click', () => fillTemplate(templateDark))
