import { items } from "./items.js";

// Function 1: Display items on the page
export function renderItems(list) {
  const itemList = document.querySelector("#list");

  itemList.innerHTML = "";

  list.forEach(item => {
    const li = document.createElement("li");

    li.className = "stock-line";

    li.textContent = `${item.name} - ${item.price} EGP`;

    itemList.append(li);
  });
}

// Function 2: Find out-of-stock items
export function matching() {
  return items.filter(item => item.inStock === false);
}

// Function 3: Set up the page
export function start() {
  renderItems(items);

  const button = document.querySelector("#apply");

  button.addEventListener("click", () => {
    renderItems(matching());
  });
}