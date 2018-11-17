/*API URL*/
const coldBirdsAPI = "https://raw.githubusercontent.com/dariusk/corpora/master/data/animals/birds_antarctica.json";
const veggieAPI = "https://raw.githubusercontent.com/dariusk/corpora/master/data/foods/vegetables.json";


/*arrays*/

let birds = [];
let food = [];

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

    }
    //else if (type == 'veggie') {
    //
    //    }

}

function pushToArray(el, array) {
    array.push(el);
}

fetchEvents(coldBirdsAPI, 'birdy');
//fetchEvents(coldBirdsAPI, 'veggie');
