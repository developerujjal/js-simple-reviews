function addReview(textField, userReview){
    const textareaFieldElement = document.getElementById(textField);
    const textareaValue = textareaFieldElement.value;

    const paragrah = document.createElement("p");
    paragrah.innerText = textareaValue;

    let userReviewElement = document.querySelector(userReview);
    userReviewElement.appendChild(paragrah);

    document.getElementById(textField).value = "";
    return userReviewElement;
}