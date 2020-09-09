/**
author: Dennis van Giessen
assignment: le Pizza Calculator
*/

/**
* Updates the total price based on the data the user input.
*/
function updatePrice()
{
	smallPizzas = Number(document.getElementById("smallPizzaCount").value);
	mediumPizzas = Number(document.getElementById("mediumPizzaCount").value);
	largePizzas = Number(document.getElementById("largePizzaCount").value);
	price = 0;
	let smallSubtotal = sizeDataMap["small"].price * smallPizzas;
	let mediumSubtotal = sizeDataMap["medium"].price * mediumPizzas;
	let largeSubtotal = sizeDataMap["large"].price * largePizzas;
	price = smallSubtotal + mediumSubtotal + largeSubtotal;
	document.getElementById("smallSubtotal").innerHTML = "<b>Subtotaal:</b> " + smallSubtotal + " euro";
	document.getElementById("mediumSubtotal").innerHTML = "<b>Subtotaal:</b> " + mediumSubtotal + " euro";
	document.getElementById("largeSubtotal").innerHTML = "<b>Subtotaal:</b> " + largeSubtotal + " euro";
	document.getElementById("total").innerHTML = "<b>Totaal:</b> " + price + " euro";
}

/** 
* KV map containing price and diameter relating to pizza size
* Diameter is in cm and price is in euros.
*/
const sizeDataMap =
{
	"small":
	{
		diameter: 20,
		price: 5
	},
	"medium":
	{
		diameter: 30,
		price: 8
	},
	"large":
	{
		diameter: 40,
		price: 12
	}
}

// The cost of the order
let smallPizzas = 0;
let mediumPizzas = 0;
let largePizzas = 0;
let price = 0;

// Register the pizza count input for processing
document.getElementById("smallPizzaCount").addEventListener("change", updatePrice);
document.getElementById("mediumPizzaCount").addEventListener("change", updatePrice);
document.getElementById("largePizzaCount").addEventListener("change", updatePrice);

// Submit button listener
document.getElementById("submit").addEventListener("click", function()
{
	if(price <= 0 || smallPizzas < 0 || mediumPizzas < 0 || largePizzas < 0)
	{
		window.alert("Vul a.u.b. geldige gegevens in.");
		return;
	}

	let smallPlural = smallPizzas == 1 ? "" : "'s";
	let mediumPlural = mediumPizzas == 1 ? "" : "'s"
	let largePlural = largePizzas == 1 ? "" : "'s"
	window.alert("Jouw order: " + smallPizzas + " kleine pizza" + smallPlural + ", " + mediumPizzas + " gemiddelde pizza" + mediumPlural + " en " + largePizzas + " grote pizza" + largePlural + " voor " + price + " euro.");
});