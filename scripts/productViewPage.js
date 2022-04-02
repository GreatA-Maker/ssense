var product = JSON.parse(localStorage.getItem("product"));

console.log(product);

var image = document.getElementById("proimage1");

var price = document.getElementById("price");

image.src = product.image;

price.textContent = `$${product.price} USD`;

// add to cart

var cart = JSON.parse(localStorage.getItem("cartItems")) || [];

var addtoBag = document.getElementById("addtobag");

addtoBag.addEventListener("click", function () {
	addtoCart(product);
});

function addtoCart(product) {
	cart.push(product);
	localStorage.setItem("cartItems", JSON.stringify(cart));
	document.getElementById("cartlength").textContent = cart.length;

	//Total items in the cart -------> cart length (updating live everytime when addTocart Button is clicked)
	document.getElementById("cartlength").textContent = cart.length;
}
