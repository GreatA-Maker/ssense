var cartList = JSON.parse(localStorage.getItem("cartItems"));
displayCartItems();

//calculate total price
var totalPrice = cartList.reduce(function (accumulator, currentvalue, index) {
	return accumulator + Number(currentvalue.price);
}, 0);

document.getElementById("total").textContent = `$ ${totalPrice}`;

//display cart function
function displayCartItems() {
	var tbody = document.querySelector("tbody");
	tbody.textContent = "";
	cartList.map(function (ele, index) {
		var row = document.createElement("tr");
		var td1 = document.createElement("td");
		var td2 = document.createElement("td");
		var td3 = document.createElement("td");
		var td4 = document.createElement("td");

		var image1 = document.createElement("img");
		image1.setAttribute("src", ele.image);
		image1.setAttribute("id", "cartImage");

		var removeFromcartButton = document.createElement("button");
		removeFromcartButton.textContent = "remove x";
		removeFromcartButton.addEventListener("click", function () {
			removeItem(index);
		});

		td2.textContent = ele.name;
		td4.textContent = `$ ${ele.price}`;

		td1.append(image1);
		td3.append(removeFromcartButton);
		row.append(td1, td2, td3, td4);
		tbody.append(row);
	});
}

//remove item from cart function
function removeItem(index) {
	cartList.splice(index, 1);
	localStorage.setItem("cartItems", JSON.stringify(cartList));
	displayCartItems();
}

//checkout button
var checkout = document.getElementById("button1");

checkout.addEventListener("click", function () {
	window.location.href = "address.html";
});
