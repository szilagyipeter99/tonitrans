const menuButton = document.querySelector(".menu-button");
const menu = document.querySelector(".navbar ul");
const blurDiv = document.querySelector(".navbar .blur");

menuButton.addEventListener("click", showMenu);

function showMenu() {
	blurDiv.classList.toggle("blur-active");
	menu.classList.toggle("responsive-active");
	menuButton.classList.toggle("menu-button-active");
	if (document.querySelector(".navbar .blur.blur-active")) {
		document
			.querySelector(".navbar .blur-active")
			.addEventListener("click", showMenu);
	} else {
		document
			.querySelector(".navbar .blur")
			.removeEventListener("click", showMenu);
	}
}

const modal = document.getElementById("modalWrap");
let galleryItem;

function showInModal(e) {
	//let img = e.querySelector("img");
	//console.log(img);
	modal.style.display = "block";
	modal
		.querySelector("img")
		.setAttribute("src", e.querySelector("img").getAttribute("src"));
	galleryItem = e;
}

function hideModal() {
	modal.style.display = "none";
}

document.addEventListener("keydown", function (event) {
	switch (event.key) {
		case "ArrowLeft":
			galleryBack();
			break;
		case "ArrowRight":
			galleryForw();
			break;
		case "Escape":
			hideModal();
			break;
	}
});

function galleryBack() {
	if (galleryItem.previousElementSibling) {
		modal
			.querySelector("img")
			.setAttribute(
				"src",
				galleryItem.previousElementSibling
					.querySelector("img")
					.getAttribute("src")
			);
		galleryItem = galleryItem.previousElementSibling;
	}
}

function galleryForw() {
	if (galleryItem.nextElementSibling) {
		modal
			.querySelector("img")
			.setAttribute(
				"src",
				galleryItem.nextElementSibling.querySelector("img").getAttribute("src")
			);
		galleryItem = galleryItem.nextElementSibling;
	}
}
