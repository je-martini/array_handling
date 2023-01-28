// const items = [1,3,2,3, 3, 1, 10 ];

// const answer = items.reduce( (obj, item) =>{
//      if(!obj[item]){
//         obj[item] = 1;
//      } else {
//         obj[item] = obj[item] + 1 
//      }
//      return obj
//  }, {});

//  console.log(answer)


const arr = [1,2,3,4,5,6,7,8,9,10]

const answer = arr.reduce( (obj, item) =>{
    if(item <= 5){
        if(!obj['less_5']){
            obj['less_5'] = 1
        } else {
            obj['less_5'] = obj['less_5'] + 1
        }

    }
    if(item > 5 && item <= 8){
        if(!obj['middle']){
            obj['middle'] = 1
        } else {
            obj['middle'] = obj['middle'] + 1
        }
    }
    if(item > 8){
        if(!obj['over_8']){
            obj['over_8'] = 1
        } else {
            obj['over_8'] = obj['over_8'] + 1
        }
    }
    return obj
}, {});

console.log(answer)

function calcSum(numbers) {
    let answer = numbers.reduce((total, n) => {
        return total += n
      }, 0)
      return answer
  }

  console.log(calcSum([1,2,3,4]))