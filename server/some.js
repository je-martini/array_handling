const numbers = [1,2,3,4];

let answer = false;

for (let index= 0; index < numbers.length; index++ ){
    const element = numbers[index];
    if(element % 2 === 0){
        answer = true;
        break;
    }
}

let answer2 = numbers.some(item => item % 2 === 0 );

const orders = [
    {
      customerName: "Nicolas",
      total: 60,
      delivered: true,
    },
    {
      customerName: "Zulema",
      total: 120,
      delivered: false,
    },
    {
      customerName: "Santiago",
      total: 180,
      delivered: false,
    },
    {
      customerName: "Valentina",
      total: 240,
      delivered: false,
    },
  ];

  let answer3 = orders.some(item => item.delivered === true)

console.log(answer3)

const areIntervalsOverlapping = require('date-fns/areIntervalsOverlapping')


const team = [
  {
    name: "Nicolas",
    age: 12,
  },
  {
    name: "Andrea",
    age: 8,
  },
  {
    name: "Zulema",
    age: 2,
  },
  {
    name: "Santiago",
    age: 15,
  },
];

let answer4 = team.every(item => item.age < 19)

console.log('answer4', answer4)

function checkArray(array) {
  // Tu código aquí 👈
  let answer3 = array.every(item => item % 2 === 0 && array.length > 0)
  return answer3
}

console.log(checkArray([]))
