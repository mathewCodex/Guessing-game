"use strict";

let range = 1;
let secretNumber = Math.trunc(Math.random() * 2  ) ;

let score = 2;
let highScore = 0;



const startGame = document.getElementById('start-game');
const check = document.querySelector('.check')
      

////////////////////////////
//  const secondRange = function (range2) {
//    const input = Number(document.querySelector(".guess").value);
//       const UserNAmes = ["Zuri"];
//    if (
//      input <= range2 &&
//      UserNAmes[0] === inputUsername.value &&
//      input === secretNumber
//    ) {
//      document.querySelector(".message").textContent =
//        "Guess You Are a Legendary Guesser 😎";
//    } else {
//      document.querySelector(".message").textContent = "Wrong guesing";
//      console.log("You Guessed Wrong");
//    } 
//  };
//  secondRange(3);
/////////////////////////////


const guesser = function(range){
  const input = Number(document.querySelector(".guess").value);
  const inputUsername = document.querySelector(".login__input--user");
  const newStage = document.querySelector('.highScore');
  const UserNAmes = ["Zuri"];
     
      // alert(
      //   `Input a value between the range of 0-2  and login with  this value : ${UserNAmes.join(
      //     "\n"
      //   )}`
      // );
      if (inputUsername.value === UserNAmes[0] && input === secretNumber) {
        //Prevent form from submitting
        //   e.preventDefault();
        //alert a logged in user
        alert("User Logged in");
        document.querySelector(".message").textContent  =
          "Guess You Are a Good Guesser 😎";
        alert(
          "Congratulations You Have Move To the next stage 🎇, You Can Now guess within the range of 1 - 3"
        );
        const sNumber =  document.querySelector(".number").textContent = secretNumber;
       if(sNumber === input){
        //sNumber = false;
        let newNumber = sNumber + range;
       
        document.querySelector(".number").textContent = newNumber;
       newStage.textContent = '2';
       }
        //sending an html element to our dom
         
      } else if (inputUsername.value === UserNAmes[0] && input !== secretNumber) {
        console.log("Wrong Number");
        document.querySelector(".message").textContent = "Wrong  number 😪";
        // secondRange();
      } 
        
 //  if( input === secretNumber)
}   
guesser(range);



check.addEventListener('click', guesser);


