const NUM = 5;


console.log('-> GENERATE A RANDOM INTEGER BETWEEN 0 AND 10');

let randomInt1 = Math.floor(Math.random() * 11);

if(randomInt1 < NUM)
{
    console.log('Random integer: ' + randomInt1 + ', is less than the constant: ' + NUM);
} 
else if(randomInt1 > NUM)
{
    console.log('Random integer: ' + randomInt1 + ', is greater than the constant: ' + NUM);
} 
else 
{
    console.log('Random integer: ' + randomInt1 + ', is equal to the constant: ' + NUM);
}


console.log('-> GENERATE A RANDOM INTEGER BETWEEN 3 AND 7');

const MIN = 3, MAX = 7;

let randomInt2 = Math.floor(Math.random() * (MAX - MIN + 1)) + MIN;

switch(randomInt2)
{
    case NUM:   console.log(`Random integer(${randomInt2}), is equal to the constant: (${NUM})`);
                break;
    default:    console.log(`Random integer(${randomInt2}), is not equal to the constant: (${NUM})`);
                break;

}


console.log('-> GENERATE A RANDOM NUMBER - 0 OR 1');

let coin;
let randomToss = Math.floor(Math.random() * 2);
coin = randomToss === 1 ? "heads" : "tails";

console.log(coin);