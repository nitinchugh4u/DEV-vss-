 const validParanthesis = (input) => {
    const splittedArr = input.split("");
  
    const [firstElem] = splittedArr;
  
    if (
      typeof input !== "string" ||
      !input ||
      input.length % 2 !== 0 ||
      !["{", "(", "["].includes(firstElem)
      // !["{", "(", "["].includes(splittedArr[0])
    ) {
      return false;
    }
  
    const stackArr = [];
  
    for (let i = 0; i < splittedArr.length; i++) {
      const currentElem = splittedArr[i]; // ")"
      const recentlyPushedStackElem = stackArr[stackArr.length - 1]; // ]
      
  
      // Check for {}
      if (recentlyPushedStackElem === "{" && currentElem === "}") {
        stackArr.pop();
        continue;
      }
  
      // Check for []
      if (recentlyPushedStackElem === "[" && currentElem === "]") {
        stackArr.pop();
        continue;
      }
  
      // Check for ()
      if (recentlyPushedStackElem === "(" && currentElem === ")") {
        stackArr.pop();
        continue;
      }
  
      stackArr.push(currentElem); // ([}}])
  
      // Handle false case
    }
    return stackArr.length === 0;
  };












  
  const validParanthesisV2 = (input) => {
    const splittedArr = input.split("");
  
    const [firstElem] = splittedArr;
  
    const pairsMapping = {
      "{": "}",
      "[": "]",
      "(": ")",
    };
  
    if (
      typeof input !== "string" ||
      !input ||
      input.length % 2 !== 0 ||
      !pairsMapping.hasOwnProperty(firstElem)
    ) {
      return false;
    }
  
    const stackArr = [];
  
    for (let i = 0; i < splittedArr.length; i++) {
      const currentElem = splittedArr[i]; // ")"
      const recentlyPushedStackElem = stackArr[stackArr.length - 1]; // ]
  
      if (pairsMapping[recentlyPushedStackElem] === currentElem) {
        stackArr.pop();
        continue;
      }
  
      stackArr.push(currentElem);
    }
    return stackArr.length === 0;
  };
  
  console.log(validParanthesisV2("([]])"));















//   "{": "}",
//       "[": "]",
//       "(": ")",
// Chirag Arora8:46 PM
// mapping
// Console.log(mapping["{"]);
// "}"
// Sanskriti Jain8:46 PM
// if (pairsMapping[recentlyPushedStackElem] === currentElem) {
//       stackArr.pop();
//       continue;
//     }
// Sanjeev Sharma8:46 PM
// const recentlyPushedStackElem = stackArr[stackArr.length - 1]; //
// Chirag Arora8:46 PM
// (
// )
// mapping["("]=")";
// )
// )
// ()
  