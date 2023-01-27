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
      delivered: true,
    },
    {
      customerName: "Valentina",
      total: 240,
      delivered: true,
    },
  ]

  const new_arr = orders.map(item => item.total)


const new_arr2 = orders.map((item) => {
    return {
        ...item,
        tax: 0.19
    };
})

console.log(orders);
console.log(new_arr2)