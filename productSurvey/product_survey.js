

const submitButton = document.getElementById("submitBtn");

function submitFeedback(){

    // when capture value from the input fields those values need to be inside the function
    // so that they can be used in the function.

    const username = document.getElementById("name").value;
    const age = document.getElementById("age").value;
    const email = document.getElementById("email").value;
    const job = document.getElementById("job").value;
    const designation = document.getElementById("designation").value;
    const productType = document.getElementById("productType").value;
    const feedback = document.getElementById("feedbackText").value;
    
    alert("Thank you for your feedback!");

    document.getElementById("userName").innerHTML = username;
    document.getElementById("userAge").innerHTML = age;
    document.getElementById("userEmail").innerHTML = email;
    document.getElementById("userJob").innerHTML = job;
    document.getElementById("userDesignation").innerHTML = designation;
    document.getElementById("userProductChoice").innerHTML = productType;
    document.getElementById("userFeedback").innerHTML = feedback;

    document.getElementById("userInfo").style.display = "block";

}

submitButton.onclick = submitFeedback;

document.addEventListener("keydown", function(e){
    if (e.key === "Enter") {
        submitFeedback();

    }
});