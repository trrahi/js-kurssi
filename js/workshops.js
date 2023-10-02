// Whole document wide variables and functions
const everySumbitButton = document.querySelectorAll("input[type='submit']")

everySumbitButton.forEach((item) => {
    item.addEventListener("click", (event) => {
        event.preventDefault()
    })
})


// Exercise 1
const sendButton = document.querySelectorAll("#form1 input")[1]
const emailField = document.querySelectorAll("#form1 input")[0]
const commentField = document.querySelector("#form1 textarea")
const emailContainer = document.querySelector("div.no-border")
const commentContainer = document.querySelectorAll("div.no-border")[1]

sendButton.addEventListener("click", displayInputs)

function displayInputs(event) {
    let emailFieldValue = emailField.value
    let commentFieldValue = commentField.value
    wrongComment = false
    wrongEmail = false


    if (emailFieldValue.length < 6 || emailFieldValue.length > 15 || !(emailFieldValue.includes("@"))) {
        wrongEmail = true
        emailField.style.outline = "2px solid red"
        const korjaaMail = document.createElement("p")
        korjaaMail.textContent = "Fix email address"
        korjaaMail.style.display = "inline"
        emailContainer.insertAdjacentElement("beforeend", korjaaMail)
    }
    if (commentFieldValue.length < 1) {
        wrongEmail = true
        commentField.style.outline = "2px solid red"
        const korjaaComment = document.createElement("p")
        korjaaComment.textContent = "Make a comment"
        korjaaComment.style.display = "inline"
        commentContainer.insertAdjacentElement("beforeend", korjaaComment) 
    }  
    if (wrongEmail || wrongComment) {
        alert("Make sure to submit proper email address and fill in the comment field!")
    } else {
        alert(`Email address:\n${emailFieldValue}\nComment:\n${commentFieldValue.substring(0, 50)}`)
    }
}

// 1.2








// Make alert function 
function makeAlert(text) {
    alert(text)
}

// Prevent default submit button default behaviour


// Exercise 2






// Exercise 3







// Exercise 4
