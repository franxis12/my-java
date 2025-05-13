// Global Scope
var globalVar = "Im a global variable";
let globalLet = "Im also global, but scoped eith let";
const globalConst = "Im a global constant"; // <-- This value cant be change.

console.log(globalVar);
console.log(globalLet);
console.log(globalConst);

{
  // Block Scope
  var blockVar = "Im a block-Scoped var";
  let blockLet = "Im a block-Scoped let";
  const blockConst = "Im a block-Scoped const";
}

//console.log(blockVar);     //<-- Accesible when in a block scoped or out
//console.log(blockLet);       <-- No accesible when in a block scoped
//console.log(blockConst);     <-- No accesible when in a block scoped 

function show(){
    var functionVar = "Im a block-Scoped var in a function";
    let functionLet = "Im a block-Scoped let in a function";
    const functionConst = "Im a block-Scoped const in a function";
}
show();

//console.log(functionVar);    //<-- Accesible when in a block scoped-function
//console.log(functionLet);      <-- No accesible when in a block scoped-funtion
//console.log(functionConst);    <-- No accesible when in a block scoped-function





