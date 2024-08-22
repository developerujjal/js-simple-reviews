/* 
1. add event handlier on the button;
2. select the textarea element and get the value;
3. create a new p tag and add innerText as a textarea value;
4. select the div, where we want to add this paragrah and make a as a appendChild
*/

document.getElementById("submit-btn").addEventListener("click", function(){
/*     const textareaFieldElement = document.getElementById("text-field");
    const textareaValue = textareaFieldElement.value;
    
    const paragrah = document.createElement("p");
    paragrah.innerText = textareaValue;

    const userReviewElement = document.querySelector(".users-review");
    userReviewElement.appendChild(paragrah);

    document.getElementById("text-field").value = ""; */

    addReview("text-field", ".users-review");
})



document.getElementById("text-field").addEventListener("keyup", function(event){
    if(event.key === "Enter"){
/*         const textareaFieldElement = document.getElementById("text-field");
        const textareaValue = textareaFieldElement.value;

        const paragrah = document.createElement("p");
        paragrah.innerText = textareaValue;

        const userReviewElement = document.querySelector(".users-review");
        userReviewElement.appendChild(paragrah);

        document.getElementById("text-field").value = ""; */

        addReview("text-field", ".users-review");
    }
})