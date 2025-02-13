const body = document.querySelector("body");

const h1 = document.createElement("h1");
h1.style.color = "#605b5b";
h1.textContent = "Etch-a-Sketch !";

const button = document.createElement("button");
button.textContent = "Change";

const container = document.querySelector("#container");

body.appendChild(h1);
body.appendChild(button);
body.appendChild(container);

// 🛠 Fonction pour créer la grille
function createGrid(size) {
  container.innerHTML = ""; // Supprime l'ancienne grille

  for (let i = 0; i < size * size; i++) {
    const divItem = document.createElement("div");
    divItem.className = "grid";

    divItem.style.width = `${700 / size}px`;
    divItem.style.height = `${700 / size}px`;

    divItem.addEventListener("mouseenter", function () {
      divItem.style.backgroundColor = "gold";
    });

    container.appendChild(divItem);
  }
}

// 📌 Créer la grille de départ (16x16)
createGrid(16);

// 📌 Ajouter un event listener sur le bouton pour changer la grille
button.addEventListener("click", () => {
  let newSize = parseInt(prompt("Enter a number of new case (max 100):"));

  if (newSize > 100 || isNaN(newSize) || newSize <= 0) {
    alert("Please enter a number between 1 and 100.");
    return;
  }

  createGrid(newSize);
});
