var products = document.getElementById("products");
products.innerHTML = "";

let url = `http://localhost:5000/products`;

async function FetchApi() {
	try {
		let res = await fetch(url);
		let data = await res.json();

		console.log(data);
		appendData(data);
	} catch (error) {
		console.log("error : ", error);
	}
}

FetchApi();

function appendData(data) {
	data.forEach((ele) => {
		console.log(ele);
		let div = document.createElement("div");

		let image = document.createElement("img");
		image.src = ele.image;
		image.setAttribute("id", "proImage");

		let name = document.createElement("p");
		name.textContent = ele.productName;

		let color = document.createElement("p");
		color.textContent = `${ele.color} Cotton Pure Cloth`;

		let price = document.createElement("p");
		price.textContent = `$ ${ele.price}`;

		div.append(image, name, color, price);
		products.append(div);

		div.addEventListener("click", function () {
			productPage(ele);
		});
	});
}

function productPage() {
	window.location.href = "productViewpage.html";
}
