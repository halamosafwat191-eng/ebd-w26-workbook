// 13-forms — Exercise

// Store the products in an array
const items = [];

// Function 1: Read the form
export function readForm() {
  const name = document.querySelector("#name").value.trim();
  const price = Number(document.querySelector("#price").value);

  return { name, price };
}

// Function 2: Clear the form
export function clearForm() {
  document.querySelector("#name").value = "";
  document.querySelector("#price").value = "";
}

// Function 3: Display the products
export function renderList(items) {
  const list = document.querySelector("#list");

  list.innerHTML = "";

  items.forEach(item => {
    const card = document.createElement("li");
    card.classList.add("card");

    const heading = document.createElement("h3");
    heading.textContent = item.name;

    const priceText = document.createElement("p");
    priceText.classList.add("price");
    priceText.textContent = `${item.price} EGP`;

    card.append(heading, priceText);
    list.append(card);
  });
}

// Function 4: Connect the form
export function wireForm() {
  const form = document.querySelector("#product-form");
  const error = document.querySelector("#error");

  form.addEventListener("submit", event => {
    event.preventDefault();

    const product = readForm();

    if (!product.name) {
      error.textContent = "Give the product a name.";
      return;
    }

    if (
      document.querySelector("#price").value.trim() === "" ||
      !Number.isFinite(product.price) ||
      product.price <= 0
    ) {
      error.textContent = "Give the product a price.";
      return;
    }

    error.textContent = "";

    items.push(product);

    renderList(items);

    clearForm();
  });
}