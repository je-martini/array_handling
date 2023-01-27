const items = [1,3,2,3, 3, 1, 10 ];

const answer = items.reduce( (obj, item) =>{
     if(!obj[item]){
        obj[item] = 1;
     } else {
        obj[item] = obj[item] + 1 
     }
     return obj
 }, {});

 console.log(answer)


//output
// {
//     1:1,
//     2:1,
//     3:2,
// }

// let obj = {
    
// }

// obj.a = 2

// console.log(obj.a + 1)