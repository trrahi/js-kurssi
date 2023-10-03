// shopping.js
// This script calculates an order total.

// Function called when the form is submitted.
// Function performs the calculation and returns false.

// Exercise: 3
function calculate() {

    // For storing the order total:
    var total;

    // Get references to the form values:
    var quantity = parseInt(document.getElementById('quantity').value); // add value

    var price =  parseFloat(document.getElementById('price').value)
    var tax =  parseFloat(document.getElementById('tax').value) ; // add value
    var discount =  parseFloat(document.getElementById('discount').value) ; //add value
	var shipping = parseFloat(document.getElementById('shipping').value); // add shipping


    console.log(document.querySelector("#quantity").value);

    // Add validation here later!

    // Calculate the initial total:
    total = quantity * price;
    console.log("total before tax: " + total);

    // Make the tax rate easier to use:
    tax = tax / 100;
    tax = tax + 1;

    // Factor in the tax:
    total = total * tax;
    console.log("total after tax: " + total);

    // Factor in the discount:
	if (quantity > 100){
		total = total - (2*discount);
	} else {
		
		total = total - discount;
	}
	total = total + (1.0*shipping);
    console.log("total after discount: " + total);

    // Format the total to two decimal places:
    total = total.toFixed(2);

    // Display the total:
    document.getElementById('total').value = total;


} // End of calculate() function.

const bookOrderSubmit = document.querySelectorAll("input[type='submit']")[2]

bookOrderSubmit.addEventListener("click", calculate)