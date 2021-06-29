const readline = require('readline');

const survey = function() {
  const readLineObj = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  const answer = {
    name: '',
    activity: '',
    activityMusic: '',
    favoriteMeal: '',
    favoriteDish: '',
    favoriteSport: '',
    superPower: ''
  }
  
  readLineObj.question('What is your name? Nicknames are also acceptable :) ', (ansName) => {
    readLineObj.question('What is an activity you like doing? ', (ansActivity) => {
      readLineObj.question('What do you listen to while doing that? ', (ansActivityMusic) => {
        readLineObj.question('Which meal is your favourite (eg: dinner, brunch, etc.) ', (ansFavoriteMeal) => {
          readLineObj.question('What is your favourite thing to eat for that meal? ', (ansFavoriteDish) => {
            readLineObj.question('Which sport is your absolute favourite? ', (ansFavoriteSport) => {
              readLineObj.question('What is your superpower? In a few words, tell us what you are amazing at! ', (ansSuperPower) => {

                console.log(`Thank you for participating in this survey. You are ${ansName} and you love to listen to ${ansActivityMusic} while you are busy with ${ansActivity}. Your favorite sport, meal of the day and dish are ${ansFavoriteSport}, ${ansFavoriteMeal} and ${ansFavoriteDish} respectively. You are also great at ${ansSuperPower}.`);

                readLineObj.close();
              });
            });
          });
        });
      });
    });
  });
  
  
}



survey();