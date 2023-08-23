const arr = [1, 2, 3, 4, 5, 6, 7, 8];

/**
 * A reduce functions take 2 argument
 * - First  - Function -> Arrow or normal
 * - Second - Initial State -> it could be anything (Optional & by default it's 0)
 *
 * Then the arrow or normal function takes four parameter (Optional).
 * Majority of time there are only two params
 * - First  - Previous Value or initial state or accumulator
 * - Second - Current value or arr[i] or active looping value
 * - Third  - Index of the iteration
 * - Fourth - Copy of the array
 *
 */


 // arr.reduce(callbackFunction, initialState)

 const sum = arr.reduce((previous,current,index,array) =>{
    console.log({previous,current,index,array})
    return previous + current;
 },10)  // 11 -> 13 -> 16 -> 20 -> 25 -> 31 -> 38 -> 46

 console.log({sum});