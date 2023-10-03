// Whole document wide variables and functions
const everySumbitButton = document.querySelectorAll("input[type='submit']")

everySumbitButton.forEach((item) => {
    item.addEventListener("click", (event) => {
        event.preventDefault()
    })
})


// Exercise 1
const sendButton = document.querySelector("#send-contact-form")


sendButton.addEventListener("click", displayInputs)

function displayInputs(event) {
        const emailField = document.querySelector("#email-field")
        const commentField = document.querySelector("#form1 textarea")
        const emailContainer = document.querySelector("div.no-border")
        const commentContainer = document.querySelectorAll("div.no-border")[1]
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



// Adding extra stuff, exercise 4
const phoneCheckbox =  document.querySelector("#contact-group-option2")
const phoneFieldLabel = document.querySelector("#phone-field-label")
const phoneField = document.querySelector("#phone-field")

phoneCheckbox.addEventListener("input", showContactField)
document.querySelector("#contact-group-option1").addEventListener("change", hideContactField)


// checks if the radio is checked

function showContactField(event) {
    let currentCheckStatus = event.target.checked
    if (currentCheckStatus) {

        phoneFieldLabel.removeAttribute("hidden")
        phoneField.removeAttribute("hidden")
    }}

function hideContactField(event) {
    if (event.target.checked) {
        phoneFieldLabel.setAttribute("hidden", "true")
        phoneField.setAttribute("hidden", "true")
    }
}






// Exercise 2

// Membership levels defined
const membershipLevel = document.querySelector("select")
const basic = membershipLevel.children[0].value
const premium = membershipLevel.children[1].value
const gold = membershipLevel.children[2].value
const platinum = membershipLevel.children[3].value
const saunaSopimus = membershipLevel.children[4].value
// Memberships as object
const membershipObject = {
    basic: 10,
    premium: 15,
    gold: 20,
    platinum: 25,
    saunasopimus: 5
}
// Create and hide discount text
const discountText = document.createElement("p")
discountText.textContent ="You qualify for 20% discount!"
const theForm = document.querySelector("#theForm")
theForm.insertAdjacentElement("beforeend", discountText)
discountText.style.display = "none"

// Special congrats for +5yr members
const fiveYearText = document.createElement("p")
fiveYearText.textContent = "Wow, thanks a lot! here's a fiver"
theForm.insertAdjacentElement("beforeend", fiveYearText)
fiveYearText.style.display = "none"


// input fields defined
const yearsField = document.querySelector("#years")
const membershipSubmit = document.querySelectorAll("input[type='submit']")[1]
const costField = document.querySelector("#cost")

// Submit event listener
membershipSubmit.addEventListener("click", calculateMembershipCost)
function calculateMembershipCost(event) {
    if (yearsField.value >= 5) {
        costField.value = ((membershipObject[membershipLevel.value] * yearsField.value)*0.8)-5
    } else if (yearsField.value >= 2) {
        costField.value = ((membershipObject[membershipLevel.value] * yearsField.value)*0.8)
    } else {
        costField.value = (membershipObject[membershipLevel.value] * yearsField.value)
    }

}
// Discount texts event listeners
yearsField.addEventListener("input", showDiscountStatus)
function showDiscountStatus(event) {
    if (yearsField.value == 2) {
        discountText.style.display = "block"
    }
    if (yearsField.value < 2) {
        discountText.style.display = "none"
    }
    if (yearsField.value >= 5) {
        fiveYearText.style.display = "block"
    }
    if (yearsField.value < 5) {
        fiveYearText.style.display = "none"
    }
}

// console.log(membershipLevel.children[0].value);




// Exercise 3

// in the shopping.js file





// Exercise 4
