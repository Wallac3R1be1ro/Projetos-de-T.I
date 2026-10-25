const data = [
	{
		imagens: "",
		title: "Staurikosaurus",
		description:
			"aa",
	},
	{
		imagens: "",
		title: "Buriolestes",
		description:
			"bb",
	},
	{
		imagens: "",
		title: "Ubirajara",
		description:
			"bb",
	},
	{
		imagens: "",
		title: "Oxalaia",
		description:
			"bb",
	},
	{
		imagens: "",
		title: "Ibirania",
		description:
			"bb",
	},
	{
		imagens: "",
		title: "Berthasaura",
		description:
			"bb",
	},
	{
		imagens: "",
		title: "Carnotauro",
		description:
			"bb",
	},
];

const cardContainer = document.querySelector(".card-container");
const searchInput = document.querySelector("#searchInput");

const displayData = data => {
	cardContainer.innerHTML = "";
	data.forEach(e =>{
		cardContainer.innerHTML += `
		<div class ="card">
			<img src="${e.imagens}" alt="">
			<h3>${e.title}</h3>
			<p> ${e.description}</p>
		</div>
		`
	})
}
searchInput.addEventListener("keyup", (e) =>{
	const search = data.filter(i => i.title.toLocaleLowerCase().includes(e.target.value.toLocaleLowerCase()));
	displayData(search);
	})
window.addEventListener("load", displayData.bind(null,data))