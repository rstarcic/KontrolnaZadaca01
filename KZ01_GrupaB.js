//1 (3 BODA)
//Napisi funkciju koja ispisuje neparne brojeve od 0 do 100
function neparniBrojevi () {
    for(let broj = 0; broj <= 100; broj++) {
        if(broj % 2 != 0) {
            console.log(broj);
        }
    }
}
// neparniBrojevi();
//2 (3 BODA)
//Napisi funkciju koja koristi switch selekciju za pretvaranje numerickog unosa u godisnje u doba. Za neispravan unos ispisi prikladnu poruku.
//INPUT: 1; OUTPUT: "Jesen";
//INPUT: 3; OUTPUT: "Ljeto"; 
function GodisnjeDoba (number) {
    switch(number) {
        case 1: 
            console.log("Jesen");
            break;
        case 2:
            console.log("Proljeće");
            break;
        case 3:
            console.log("Ljeto");
            break;
        case 4: 
            console.log("Zima");
            break;
    }
}
// GodisnjeDoba(4);
//3 (4 BODA)
//Napisi funkciju koja okrece uneseni string i broji charactere uzimajuci u obzir prazna mjesta (eng. whitespaces)
//INPUT: "Pisanje zadataka nije jednostavan posao"
//OUTPUT: ("oasop navatsondej ejin akatadaz ejnasiP", 39)
function reversedString (str, brojac) {
    brojac = 0;
    let okrenutiString = "";
    for(let i = str.length; i >= 0; i--) {
        brojac++;
        okrenutiString += str[i];
    }
    console.log(okrenutiString, brojac);
}
// reversedString("Pisanje zadataka nije jednostavan posao");

//4 (4 BODA)
//Napisi funkciju koja odreduje najdulju vrijednostu u danom objektu
const peopleYouShouldKnow = {
    Donald: "Knuth",
    Bjarne: "Stroustrup",
    Ada: "Lovelace",
    Kent: "Beck",
    Martin: "Fowler",
    Erich: "Gamma"
}
//INPUT: somePeople
//OUTPUT: "Stroustrup"

function NajduljaVrijednost (somePeople) {
    let najdulje = 0;
    for(key in somePeople) {
        if(somePeople[key].length > najdulje) {
            najdulje = somePeople[key];
        }
    }
    return najdulje;
}
console.log(NajduljaVrijednost("Donald"));

//5 (4 BODA)
//Napisi funkciju u obliku function expressiona koja vraca neproste brojeve
//INPUT: [3, 4, 5, 8, 11]
//OUTPUT: [4, 5, 8]
let neprosti = function(broj) {
    let neprostiBr = [];
    for(i of broj) {
        if (i % 2 == 0 && i % 3 != 0 || i % 5 == 0) {
            neprostiBr.push(i);
        }
    }
    return neprostiBr;
}
console.log(neprosti([3, 4, 5, 8, 11]));
//ZAMJENA ZA 5 (4 BODA)
//Napisi funkciju u obliku arrow functiona koja pretvara mala slova danih inputa u velika slova
//INPUT: ["aa", "b1", "", null, "AAA"]
//OUTPUT: ["AA","B1", "", null, "AAA"]


//6 (4 BODA)
//Napisi funkciju koja vraca sve drzave koji su imali manju temperaturu od one iz ulaznog parametra
const someEvents = [
    {
        stateName: "SAD",
        measuredTemperature: 56.7,
    },
    {
        stateName: "Tunis",
        measuredTemperature: 55,
    },
    {
        stateName: "Irak",
        measuredTemperature: 53.9,
    },
    {
        stateName: "Argentina",
        measuredTemperature: 48.9,
    },
    {
        stateName: "Grcka",
        measuredTemperature: 48.0,
    },
];
//INPUT: (someStates, 48.5)
//OUTPUT: [{stateName: "Grcka", measuredTemperature: 48.0}]
function tempDrzave (someStates, temperature) {
    let rez = [];
    for( let prop in someStates ) {
        if(someStates[prop].measuredTemperature < temperature) {
            rez.push(someStates[prop]);
        }
    }
    return rez;
}
// console.log(tempDrzave(someEvents, 48.5));