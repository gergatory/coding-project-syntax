//console.log("bonjour".length);
//.length counts the characters in the string 
console.log("Hello".toUpperCase())
//toUpperCase increase font to capitals
//console.log shows us the result
console.log(Math.random()*10);
console.log(Math.floor(Math.random()*10));
//Math.floor gives us whole numbers 
//noughts and crosses board below...
/*
console.log("    |   |    ");
console.log("    |   |    ");
console.log("    |   |    ");
console.log("----|---|----");
console.log("    |   |    ");
console.log("    |   |    ");
console.log("----|---|----");
console.log("    |   |    ");
console.log("    |   |    ");
console.log("    |   |    ");
*/
let space1 = "O"
let space2 = "O"
let space3 = "O"
let space4 = "X"
let space5 = "O"
let space6 = "X"
let space7 = "O"
let space8 = "X"
let space9 = "O"

console.log("   |   |   ");
console.log(` ${space1} | ${space2} | ${space3} `);
console.log("   |   |   ");
console.log("-----------");
console.log("   |   |   ");
console.log(` ${space4} | ${space5} | ${space6} `);
console.log("   |   |   ");
console.log("------------");
console.log("   |   |   ");
console.log(` ${space7} | ${space8} | ${space9} `);
console.log("   |   |   ");
if (space1 ==="X" && space2 ==="X" && space3 ==="X"){
    console.log("X wins")
}
else if( space1==="O" && space2==="O" && space3==="O"){
    console.log("O wins")
}
else {
    console.log("does not work")
}
