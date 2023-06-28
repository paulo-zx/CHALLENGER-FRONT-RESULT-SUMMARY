
let text = '{ "info" : [' +
'{  "category": "Reaction","score": 80,"icon": "./assets/images/icon-reaction.svg" },' +
'{ "category": "Memory","score": 92,"icon": "./assets/images/icon-memory.svg" },' +
'{ "category": "Verbal","score": 61,"icon": "./assets/images/icon-verbal.svg" },' +
'{ "category": "Visual","score": 72,"icon": "./assets/images/icon-visual.svg" } ]}';


const obj = JSON.parse(text);

document.getElementById("x-1").src =
obj.info[0].icon ;

document.getElementById("x-2").innerHTML =
obj.info[0].category ;

document.getElementById("x-3").innerHTML =
obj.info[0].score ;

document.getElementById("y-1").src =
obj.info[1].icon ;

document.getElementById("y-2").innerHTML =
obj.info[1].category ;

document.getElementById("y-3").innerHTML =
obj.info[1].score ;

document.getElementById("z-1").src =
obj.info[2].icon ;

document.getElementById("z-2").innerHTML =
obj.info[2].category ;

document.getElementById("z-3").innerHTML =
obj.info[2].score ;

document.getElementById("v-1").src =
obj.info[3].icon ;

document.getElementById("v-2").innerHTML =
obj.info[3].category ;

document.getElementById("v-3").innerHTML =
obj.info[3].score ;

