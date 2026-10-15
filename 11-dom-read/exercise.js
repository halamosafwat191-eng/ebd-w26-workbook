// 11-dom-read — Exercise

// Function 1: Get the main heading
export function pageHeading() {
  const heading = document.querySelector("h1");
  return heading.textContent;
}

// Function 2: Count the product cards
export function productCount() {
  const cards = document.querySelectorAll(".card");
  return cards.length;
}

// Function 3: Get all product names
export function productNames() {
  const cards = document.querySelectorAll(".card");

  return Array.from(cards).map(card => {
    return card.querySelector("h3").textContent;
  });
}

// Function 4: Find the price of a product
export function priceOf(name) {
  const cards = document.querySelectorAll(".card");

  const card = Array.from(cards).find(card => {
    return card.querySelector("h3").textContent === name;
  });

  if (!card) {
    return null;
  }

  return card.querySelector(".price").textContent;
}

// Function 5: Get names of sold-out products
export function soldOutNames() {
  const cards = document.querySelectorAll(".card.sold-out");

  return Array.from(cards).map(card => {
    return card.querySelector("h3").textContent;
  });
}