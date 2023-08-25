v // algo
// 1.Take the input
// 2.Store the input
// 3. Convert the string in to an array
// 4.Now traverse the loop over the array and and if it is open bracket then we have to push inside the stack but if it is  a closed bracket then first we have to check the length of the stack if the stack is empty then we have to return false.
// 5.But if the stack is not empty then we have to pop from the stack and compare it with the current loop element if they are opposite then we have to move forward but if not equal then we have to return false.
// 6.After traversing the whole loop we  have to check the length of an array if it is 0 then we have to return true if not zero then we have to return  false. 
// []{}()

function find(str) {
    console.log(str);

    let arr = str.split("");
    console.log(arr);

    let stack = [];
    let popElement;
    let arrElement;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == "[" || arr[i] == "{" || arr[i] == "(") {
            stack.push(arr[i]);
        } else {
            if ((stack.length < 1) || (arr.length % 2!==0)) {
                console.log("hello");
                return false;
            } else {
                console.log("hey");
                popElement = stack.pop();
                arrElement = arr[i];
                if (
                    (popElement == "[" && arrElement == "]") ||
                    (popElement == "{" && arrElement == "}") ||
                    (popElement == "(" && arrElement == ")")
                ) {
                } else {
                    return false;
                }
            }
        }
    }
    if (stack.length == 0) {
        return true;
    } else {
        return false;
    }
}

let res = find("[]");
console.log(res);
