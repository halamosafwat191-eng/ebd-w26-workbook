// 12-dom-write — Exercise

// Function 1: Add a product
export function addProduct(name, price) {
  const card = document.createElement("li");
  card.classList.add("card");

  const heading = document.createElement("h3");
  heading.textContent = name;

  const priceText = document.createElement("p");
  priceText.classList.add("price");
  priceText.textContent = `${price} EGP`;

  card.append(heading, priceText);

  document.querySelector("#list").append(card);
}

// Function 2: Remove a product
export function removeProduct(name) {
  const cards = document.querySelectorAll(".card");

  const card = Array.from(cards).find(card => {
    return card.querySelector("h3").textContent === name;
  });

  if (card) {
    card.remove();
  }
}

// Function 3: Mark a product as sold out
export function markSoldOut(name) {
  const cards = document.querySelectorAll(".card");

  const card = Array.from(cards).find(card => {
    return card.querySelector("h3").textContent === name;
  });

  if (card) {
    card.classList.add("sold-out");
  }
}

// Function 4: Clear all products
export function clearProducts() {
  const cards = document.querySelectorAll(".card");

  cards.forEach(card => {
    card.remove();
  });
}

// Function 5: Connect the buttons
export function wireButtons() {
  const addButton = document.querySelector("#add");
  const resetButton = document.querySelector("#reset");

  addButton.addEventListener("click", () => {
    addProduct("Notebook", 45);
  });

  resetButton.addEventListener("click", () => {
    clearProducts();
  });
}