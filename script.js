/*/*
// TO DO LIST FOR LEARNING HTML, CSS, JAVASCRIPT, REACT.

let subject = ['Html', 'Css', 'Javascript', 'React'];

//CHECKING THE PROGRESS STATUS

/*let tracker = ['Done', 'In progress', 'About to'];

let firstQuestion = prompt('What have you learnt so far?, html, css, javascript, react');

let secondQuestion = prompt('what is the progress status of what you have learnt 1=done 2=in progress 3=about to');

alert('i have learnt'+ subject[firstQuestion-1]+ 'and I am '+tracker[secondQuestion-1])

let cartQuantity = 0;
*/

let myArray = [1, 2, 'hello'];

console.log(myArray.length);

//ARRAY PROPERTIES
//THE ARRAY LENGTH

let newArray = ['Chisom', 'Chinedu', 'Chibuzor', 'Chibueze'];

console.log(newArray);

newArray[newArray.length]= 'promise';
console.log(newArray);

//MODIFYING AN ARRAY; WE HAVE A DEFAULT ARRAY FUNCTION INSTRUCTION THAT ALLOWS YOU TO MODIFY YOUR ARRAY;

let arrAgain = ['Peculiar', 'Divine', 'Pascal'];
console.log(arrAgain);

//ARRAY PUSH METHOD OR FUNCTION: THIS ALLOWS YOU TO ADD DATA TO YOUR ARRAY;
arrAgain.push('Promise');
console.log(arrAgain);

//ARRAY POP METHOD OR FUCNTION: THIS ALLOWS YOU TO REMOVE THE LAST DATA IN AN ARRAY;
arrAgain.pop(arrAgain);
console.log(arrAgain);

//ARRAY UNSHIFT METHOD OR FUNCTION: THIS ALLOWS YOU TO ADD DATA AS THE FIRST DATA IN AN ARRAY;
arrAgain.unshift('Joseph');
console.log(arrAgain);

//ARRAY SHIFT METHOD OR FUNCTION: THIS ALLOWS YOU TO REMOVE THE FIRST DATA IN AN ARRAY;
arrAgain.shift();
console.log(arrAgain);

//IN THE LATST VERSION OF JAVASCRIPT, THIS IS HOW TO UPDATE YOUR ARRAY;
arrAgain = [...arrAgain, 'Emmanuel'];
console.log(arrAgain);

/* ARRAY SORT, THIS ALLOWS YOU TO SORT YOUR ARRAY IN ALPHABETICAL ORDER;
arrAgain.sort();
console.log(arrAgain);

arrAgain.reverse();
console.log(arrAgain);

arrAgain[6] = 'Henry';
console.log(arrAgain); 
*/


// ARRAY ACESS METHOD
//INDEX OF ALLOW YOU TO KNOW THE INDEX NUMBER OF A DATA IN AN ARRAY;
let myarray = ['Hello', 1, 2, true]

console.log(myarray.indexOf('Hello'));

let check1 = myarray.indexOf('Hello');

let check2 = myarray.indexOf(false);

// ARRAY INCLUDE METHOD: IT ALLOW YOU TO CHECK IF A DATA IS INSIDE AN ARRAY; IF A DATA IS INSIDE AN ARRAY, IT RETURNS TRUE, IF A DATA IS NOT INSIDE THE ARRAY, IT RETURNS FALSE;

let myInclude = ['C. Ronaldo', 'Wan-Bissaka', 'B. Fernandes'];

let hold = myInclude.includes('C. Ronaldo');

console.log(hold);

// ARRAY SPLICE: ARRAY SPLICE ALLOW YOU TO REMOVE DATA FROM AN ARRAY USING THE INDEX NUMBER OF THAT DATA;

myInclude.splice(1,1);

console.log(myInclude);

//ARRAY REMOVER;

/*let badFriends = ['Emmanuel', 'David', 'Victor', 'Edidiong', 'DMS', 'Kalmanja'];

let userAsk = prompt('Which Bad Friend do you want to remove?');

let check = badFriends.indexOf(userAsk);

check === - 1?alert('That Person is not a Bad Friend'):badFriends.splice(check);

console.log(badFriends);


let house = ['Olivia', 'Peculiar', 'Macdan', 'Elysian', 'Excel'];
console.log(house);

console.log(house.indexOf('Olivia'));

console.log(house.indexOf('excel'));

console.log(house.indexOf('Favor'));

console.log(house.indexOf('Macdan'));

console.log(house.includes('Elysian'));


console.log(house.includes('Olivia'));

house.splice(0,3);
console.log(house);
*/


/*
let friends = ['Micheal', 'Williams', 'Moses', 'Philip', 'Remeo', 'Joseph', 'Success', 'Pascal', 'Divine', 'Varoni', 'Peculiar', 'Promise', 'Emmanuel', 'Jude'];

let addFriend = prompt('Add Friend');

let add = friends.indexOf(addFriend);

add !== - 1? alert('Your friend request has been accepted'): alert('You may not know this person');
*/

//GUESSING GAME;
let sName = ['Success', 'Edidiong', 'Ubong', 'Uduak',];

//YOU CAN GENERATE A RANDOM NUMBER

// IN JAVASCRIPT, THERE IS AN INBUILT FUNCTION THAT ALLOWS YOU TO GENERATE RANDOM NUMBERS;

console.log(Math.floor(Math.random()*5))

//MULTI-DIMENSIONAL ARRAY;

//YOU CAN PUT AN ARRAY INSIDE AN ARRAY;

let multi = [['Divine', 'Jerry', 'Samuel', 'Emma'], [2012, 2015, 2020, 2021]];

console.log(`I met ${multi[0][0]} In the Year ${multi[1][0]}`);

//OBJECTS IN JAVASCRIPT:

let person = {name:'Success', carName:'Mustang', carColor:'Red', girlFriend:'Clara'}; 
//HOW DO YOU NOW ACCESS DATA IN AN OBJECT?

console.log(`Success Car name is ${person.carName} and his Girlfriends name is ${person.girlFriend}`);

//STORE INFORMATION ABOUT SAMSUNG PHONES;

/*
let samsung = [{name:'Samsung s10E', color:'Red', camera:'20mp', price:'$200'}, {
  name:'Samsung s22 Ultra', color:'Silver', camera:'25mp', price:'$250'
}]

console.log(samsung[0].name);
console.log(samsung[1].color);

alert(samsung[0].name, samsung[0].price, samsung[0].camera, samsung[0].color)
*/

//DOM: DOCUMENT OBJECT MODEL; DOM IS VERY IMPORTANT IN JAVASCRIPT; DOM IS THE KEY TO BUILDING DYNAMIC AND INTERACTIVE WEBSITE;

console.dir(document);

//YOUR DOM IS CREATED BY YOUR BROWSER ONCE YOUR WEBPAGE LOADS; DOM IS HOW YOUR BROWSER DISPAYS INFORMATION ABOUT YOUR HTML DOCUMENT;

document.write('let me feel good');

//DOM INFORMATION: DOCUMENT.GETELEMENTBYID ALLOW YOU TO SELECT YOUR HTML ELEMENT USING THE ID OF THAT ELEMENT;


//let know = prompt('What is your name?');

//let holld = document.getElementById('test');

//holld.innerText = 'Hello' + know;


//INTRODUCTION TO CONDITIONAL STATEMENTS;

// WE WILL BE ABLE TO LOOK AT HOW TO MAKE DECISIONS IN JAVASCRIPT;

// THERE ARE SEVERAL WAYS OF MAKING DECISIONS IN JAVASCRIPT;

// TERNARY OPERATORS
//IF ELSE CONDITION
// ELSE IF CONDITION
// SWITCH CONDITION

// DECISION IN JAVASCRIPT: YOU ARE DECIDING WHICH JAVASCRIPT INSTRUCTION TO RENDER;

//TERNARY OPERATOR; IT ALLOWS YOU TO SET A CONDITION, EVALUATE, ACCRODING TO THE OUTPUT OF THAT CONDITION, YOU CAN NOW DECIDE WHICH JAVASCRIPT INSTRUCTION TO EXECUTE;

/*
let num;

num?alert('Hello'):alert('Error');
*/

/*
let students = ['Lucky', 'Marvelous', 'Peculiar', 'David', 'Divine',];

  

let askStudent = prompt('Can you guess our student name?');

let check = students.indexOf(askStudent);

let grab = document.getElementById('test');

check === -1? grab.innerHTML = 'Not Found': grab.innerHTML = 'Found';
*/

// IF AND ELSE CONDITIONAL STATEMENTS;

/*

  let pupils = ['Lucky', 'Marvelous', 'Peculiar', 'David', 'Divine',];

  let ask = prompt('Guess our students name');

  let show = pupils.indexOf(ask);

  let take = document.getElementById('test');

  if (show === -1) {
    take.innerHTML = 'Not Found';
  } else {
    take.innerHTML = 'Found';
  }
    */

  let age = 18;

  let favoritePlayers = ['Ronaldo', 'Messi', 'Neymar', 'Mbappe', 'Haaland'];

  let askQuestion = prompt('Can you guess any of our favorite players name?');

  let checkAnswer = favoritePlayers.indexOf(askQuestion);

  if (checkAnswer === -1) {
    alert('Your guess is not correct?')
    
  } else {
    alert('Your guess is correct');

    let userAge = prompt('How old are you');
       
  if (userAge >= age) {
      alert('YOUR GUESS IS CORRECT AND YOU ARE AN ADULT');
  } else{
    alert('YOUR GUESS IS RIGHT BUT YOU ARE NOT AN ADULT');
  }
   
  }

// ELSE IF CONDITIONS: ELSE IF CONDITION ALLOW YOU TO EVALUATE A CONDITION AND MAKE MULTIPLE DECISIONS

// ANYONE WHO IS 5 & 6 WILL DRINK PAP;
// IF YOURE 10 & 11, YOU WILL DRINK TEA;
// IF YOURE 18 AND 20, YOU WILL DRINK 1 BOTTLE OF BEAR;
// IF YOUR AGE GAP DOESNT FALL BETWEEN THE ABOVE LISTED AGES, GO AND SLEEP;

//SWITCH STATEMENTS; SWITCH STATEMENT IS JUST LIKE ELSE IF. IT ALLOW YOU TO MAKE MULTIPLE DECISIONS;

// 16 SSSSSSSSH, GO AND WASH PLATE;

// 18, ONE CHILLED BOTTLE OF BEER;

// 25, DANCE AMAPIANO;

// IF THE USERS AGE DOESNT MATCH ANY OF THE ABOVE LISTED AGE, OGA GO AND REST;



// ROCK, PAPER, SCISSOR GAME

// PLAYER SHOULD CHOOSE BETWWN ROCK, PAPER OR SCISSOR

let player = prompt("which do you choose between ROCK, PAPER or SCISSOR ?")

displ

let decide;

let comp = Math.floor(Math.random()*3)

if(comp===0){
  comp = "Rock"
}

else if(comp===1){
  comp="Paper"
}

else{
  comp="Scissor"
}

// CONDITION FOR PLAYER
if(player===comp){
  decide="true"
}

else if (player===comp){
  decide="true"
}

else(playyer)



  


  
 

*/
