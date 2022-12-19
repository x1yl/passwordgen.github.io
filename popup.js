document.getElementById("button").addEventListener("click", generate);

const checkbox = document.getElementById("Symbols");
let symbol = "";

checkbox.addEventListener("change", () => {
  symbol = checkbox.checked ? "y" : "";
});

function generate(){
  function combineCharacters(strings, length=16) {
    let combinedString = "";
    let characters = [];
    var input = document.getElementById("length").value;
    if (isNaN(parseInt(input)) || parseInt(input) <= 0) {
      ;
    } else {
      length = parseInt(input);
    }
    let includedStrings = [];
    for (let string of strings) {
      if (string === "!@#$%&?") {
        if (symbol == "y") {
          for (let character of string) {
            characters.push(character);
          }
          includedStrings.push(string);
        }
      } else if (string !== "!@#$%^&*()") {
        for (let character of string) {
          characters.push(character);
        }
        includedStrings.push(string);
      }
    }
    if (length > characters.length) {
      return combinedString;
    }
    while (combinedString.length < length) {
      index = Math.floor(Math.random() * characters.length);
      combinedString += characters[index];
      characters.splice(index, 1);
    }
    for (let string of includedStrings) {
      if (!combinedString.includes(string)) {
        index = Math.floor(Math.random() * combinedString.length);
        combinedString =
          combinedString.slice(0, index) + string[0] + combinedString.slice(index + 1);
        break;
      }
    }
    return combinedString.slice(0, length);
  }
  
  strings = ["!@#$%&?", "qwertyuiopasdfghjklzxcvbnm", "QWERTYUIOPASDFGHJKLZXCVBNM", "1234567890"];
  amount = 1;
  for (let i = 0; i < amount; i++) {
    combinedString = combineCharacters(strings);
    console.log(combinedString);
	var node = document.getElementById("output");	
    while( node.firstChild )
      node.removeChild( node.firstChild );
    node.appendChild( document.createTextNode(combinedString) );
    navigator.clipboard.writeText(combinedString);
  }
  document.getElementById('Copied').innerHTML = "Copied Password to Clipboard";
  console.log("Copied password to clipboard");
  document.getElementById('button').innerHTML = "Generate a new password";
}
