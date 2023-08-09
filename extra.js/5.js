function getGreeting(name ="uSer"){
    if(typeof name !== "string"){
        return "please enter some valid input"
    }
  else{  
    name = name.toLowerCase()
    return `hello ${name} welcome to the office`
}
}

console.log(getGreeting())
// only string
//  except string nit excepted




// input NITIN 
// output - Nitin 


function greeting(name = "SUNNY" ){
    if(typeof name!=="string"){
        return "please enter the valid input"
    }
else{
 name = name.toLowerCase();
console.log(name);
let first = name.slice(0,1).toUpperCase();
console.log(first);
console.log(name);
let second = name.slice(1,5)
console.log(second);
console.log(typeof first);
console.log(typeof second);

let third = first + second

return `welcome ${third} to the team`
}
}
console.log(greeting("NITIN"))
console.log(greeting("20"))
console.log(greeting(null))
console.log(greeting(undefined))
console.log(greeting())


