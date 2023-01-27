const totals = [ 1,2,3,4];

const answer = totals.reduce((total_sum, element) => {return total_sum + element}, 0);
console.log(answer)