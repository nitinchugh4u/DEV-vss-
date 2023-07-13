const occurenceCount = (input) => {
    const mapping = {};
  
    for (let i = 0; i < input.length; i++) {       
      const chiragKiKey = input[i];
  
      if (mapping.hasOwnProperty(chiragKiKey)) {
        mapping[chiragKiKey] = mapping[chiragKiKey] + 1;     //mapping[3] = mapping[3]+1 =1+1
        //mapping[1] = 1 + 1;
      } else {
        mapping[chiragKiKey] = 1;         // 1: 2  2:1  3:1  4:! 
        //mapping[1] = 1;b
      }
    }
  
    return mapping;
  };
  
  console.log(occurenceCount([1, 2, 3, 4, 1, 3, 4, 6, 1, 5]));








  
const occurenceCount2 = (input) => {
  const mapping = {};

  for (let i = 0; i < input.length; i++) {
    const chiragKiKey = input[i];

    mapping.hasOwnProperty(chiragKiKey)
      ? mapping[chiragKiKey]++
      : (mapping[chiragKiKey] = 1);
  }

  return mapping;
};


//   { '1': 3, '2': 1, '3': 2, '4': 2, '5': 1, '6': 1 }  output