//Q1 create two constants, add them assign to a new constants
const x = 10
const y = 20

const z = x + y 
console.log(z)


//Check below code, output should be false by comparing. console.log the answer
const a = 10
const b = '10'

console.log(a === b)


// generate a random number between 0 and 5, if it is lesser than 3,
//console.log "lesser than 3" else "Greater"

const num = Math.random()
const randomNum = num*6
const roundOfVal = Math.floor(randomNum)
console.log(roundOfVal)
if (roundOfVal < 3){
    
    console.log('lesser than 3')
}
else if(roundOfVal === 3)
{
    console.log('is equals to 3')
}
else
    {
    console.log('Greater')
}
