 // answer++;
 // answer +=1;
 // answer = answer + 1;

// = assignment answer = prompt()
// 

// 

var correctAnswer = 0;
var totalQuestions = 15;

 
// Question 1
var question1 = console.log('Question 1: What does css stand for?' );
var answer = prompt();

if (answer === 'cascade style sheet') {
    correctAnswer++;
    console.log('cascade style sheet: That is correct!');
     
}
else {

    console.log('Sorry that is wrong');
     

}

// QUESTION 2
var question2 = console.log('question 2: What does html stand for?');
var answer = prompt();

if (answer === 'hypertext markup language') {
    correctAnswer++;
    console.log('hypertext markup language: That is correct!');
     
}
else {
    console.log('Sorry that is wrong');
}	 


// QUESTION 3
var question3 = console.log('question 3: What is sass used for?');
var answer = prompt();

if (answer === 'preprocessor') {
    correctAnswer++;
    console.log('preprocessor: That is correct!');
     
}
else {
    console.log('Sorry that is wrong');
     
}	 


// QUESTION 4
var question4 = console.log('question 4: Which property do you use to change a font?');
var answer = prompt();

if (answer === 'font-family') {
    correctAnswer++;
    console.log('font-family: That is correct!');
}

else {
    console.log('Sorry that is wrong');     
}	


// QUESTION 5
var question5 = console.log('question 5: Where do you put the link tag for you css file?'); 
var answer = prompt();

if (answer === 'head tag') {
    correctAnswer++;
    console.log('head tag: That is correct!');
     }

else {
    console.log('Sorry that is wrong');

}

// QUESTION 6
var question6 = console.log('question 6: What is the first thing you type for an html file?'); 
var answer = prompt();

if (answer === '<!DOCTYPE html>') {
    correctAnswer++;
    console.log('<!DOCTYPE html>: That is correct!');
     }

else {
    console.log('Sorry that is wrong');

}   

// QUESTION 7
var question7 = console.log('question 7: What is the next tag after <!DOCTYPE html>'); 
var answer = prompt();

if (answer === '<html>') {
    correctAnswer++;
    console.log('<html>: That is correct!');
     }

else {
    console.log('Sorry that is wrong');

}   

// QUESTION 8
var question8 = console.log('question 8: Fill in the blank console._____'); 
var answer = prompt();

if (answer === 'log') {
    correctAnswer++;
    console.log(' That is correct!');
     }

else {
    console.log('Sorry that is wrong');

}   

// QUESTION 9
var question9 = console.log('question 9: CSS is the_____ of a webpage'); 
var answer = prompt();

if (answer === 'styling') {
    correctAnswer++;
    console.log(' That is correct!');
     }

else {
    console.log('Sorry that is wrong');

}   

 
 // QUESTION 10
var question10 = console.log('question 10: HTML is the_____ of a webpage'); 
var answer = prompt();

if (answer === 'structure') {
    correctAnswer++;
    console.log(' That is correct!');
     }

else {
    console.log('Sorry that is wrong');

}   


// QUESTION 11
var question11 = console.log('question 11: Where does the title tag go?'); 
var answer = prompt();

if (answer === 'head tag') {
    correctAnswer++;
    console.log(' That is correct!');
     }

else {
    console.log('Sorry that is wrong');

}   

 
 // QUESTION 12
var question12 = console.log('question 12: Where does the meta tag go?'); 
var answer = prompt();

if (answer === 'head') {
    correctAnswer++;
    console.log(' That is correct!');
     }

else {
    console.log('Sorry that is wrong');

}   

// QUESTION 13
var question13 = console.log('question 13: Where is the best location for the <script> tag?'); 
var answer = prompt();

if (answer === 'body') {
    correctAnswer++;
    console.log(' That is correct!');
     }

else {
    console.log('Sorry that is wrong');

}   


// QUESTION 14
var question14 = console.log('question 14: How do you write out a container as a class for a div? '); 
var answer = prompt();

if (answer === '.container') {
    correctAnswer++;
    console.log(' That is correct!');
     }

else {
    console.log('Sorry that is wrong');

}   

 
 // QUESTION 15
var question15 = console.log('question 15: What does prompt do?'); 
var answer = prompt();

if (answer === 'popup window') {
    correctAnswer++;
    console.log(' That is correct!');
     }

else {
    console.log('Sorry that is wrong');

}   


console.log(100 * correctAnswer/15);

console.log(name+' you got ' +correctAnswer+ ' correct answers out of 15.');

var results = correctAnswer /15;
var score = results.toFixed(4) * 100 + '%'
console.log('You scored a '+score+' on the quiz.');

