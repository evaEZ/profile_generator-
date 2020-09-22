const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("What's your name? Nicknames are also acceptable:)\n", (answer1) => {
  rl.question("What's an activity you like doing?\n", (answer2) => {
    rl.question("What do you listen to while doing that?\n", (answer3) => { 
     rl.question("Which meal is your favourite (eg: dinner, brunch, etc.)\n", (answer4)=>{
        rl.question("What's your favourite thing to eat for that meal?\n", (answer5) => {
          rl.question("Which sport is your absolute favourite?\n", (answer6)=> {
            rl.question("What is your superpower? In a few words, tell us what you are amazing at!\n", (answer7) => {
              console.log(`Thank you for your valuable feedback:\n Your Name: ${answer1}\n What's an activity you like doing: ${answer2}\n What do you listen to while doing that: ${answer3}\n Which meal is your favorite? ${answer4}\n What's your favorite thing to eat for that meal? ${answer5}\n Which sport is your absolute favorite? ${answer6}\n What's your super power?${answer7}`);
              rl.close();
           });
          });
        });
      });
    });
  });
 
});


rl.question('Please enter the first number : ', (answer1) => {
  rl.question('Please enter the second number : ', (answer2) => {
      var result = (+answer1) + (+answer2);
      console.log(`The sum of above two numbers is ${result}`);
      rl.close();
  });
});

