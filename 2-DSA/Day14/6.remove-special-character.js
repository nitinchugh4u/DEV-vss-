// removeSpecialCharacters
// let str = "hello==+ world++_ @@@how## ##are# $you%";
// let output =removeSpecialCharacters(str);
// console.log(output);

function removeSpecialCharacters(string) {
    var pattern = /[^a-zA-Z0-9\s]/g; // Regular expression pattern to match special characters
    return string.replace(pattern, '');
  }
  
  // Example usage
  var inputString = "Hello, @world!";
  var cleanString = removeSpecialCharacters(inputString);
  console.log(cleanString);