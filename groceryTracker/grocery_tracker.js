let item1 = document.getElementById("item1");
let item2 = document.getElementById("item2");
let item3 = document.getElementById("item3");
let btn = document.getElementById("btn");


function calculate(){

    let value1 = parseFloat(item1.value) || 0;
    let value2 = parseFloat(item2.value) || 0;
    let value3 = parseFloat(item3.value) || 0;

    let result = value1 + value2 + value3;
    document.getElementById("result").innerText = "Total: " + result;

    console.log("Item 1: " + value1);
    console.log("Item 2: " + value2);
    console.log("Item 3: " + value3);
}
btn.addEventListener("click", calculate);

