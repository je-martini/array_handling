// const words = ["spray", "elites", "limit", "apple", "exuberant"];

// const new_arr = [];

// for (let index = 0; index < words.length; index++){
// let item = words[index];
// if(item.length >= 6){
//     new_arr.push(item)
// }
// }

// console.log('new', new_arr);
// console.log('or', words);
// const answer = words.filter(item => item.length >= 6);
// console.log('as', answer);
// console.log('or', words)

// const orders = [
//     {
//       customerName: "Nicolas",
//       total: 60,
//       delivered: true,
//     },
//     {
//       customerName: "Zulema",
//       total: 120,
//       delivered: false,
//     },
//     {
//       customerName: "Santiago",
//       total: 180,
//       delivered: true,
//     },
//     {
//       customerName: "Valentina",
//       total: 240,
//       delivered: true,
//     },
//   ];

//   const answer1 = orders.filter(item => item.delivered && item.total > 100);
//   console.log('ans1', answer1);

//   const search = (query) => {
//     return orders.filter(item => {
//             return item.customerName.includes(query)
//         }
//     )
//   }

//   console.log(search('kajsa'))



console.log(arr.filter(item => item.includes("ana")))



console.log(search('ana'))

let arr = ["santi", "nico", "anastasia", "ana"]
function filterByTerm(array, term) {
      // Tu código aquí 👈
        return array.filter(item => {
                return item.includes(term)
            }
        )      
}

console.log(filterByTerm(arr, 'xd'))
