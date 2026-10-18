// Checkpoint A — Solution

import { findAllOrders, findOrderById } from "./orders-db.js";

// Function 1: Load all orders
export async function loadOrders() {
  const orders = await findAllOrders();
  return orders;
}

// Function 2: Filter orders from Alexandria that are pending
export function myOrders(orders) {
  return orders.filter(order => {
    return order.city === "Alexandria" && order.status === "pending";
  });
}

// Function 3: Calculate total revenue
export function summarize(orders) {
  return orders.reduce((total, order) => {
    return total + order.price * order.quantity;
  }, 0);
}

// Function 4: Describe an order
export async function describeOrder(id) {
  try {
    const order = await findOrderById(id);

    return `${order.item} x${order.quantity} ordered by ${order.student}`;
  } catch (error) {
    return `Could not find order ${id}`;
  }
}

// Function 5: Convert orders to JSON
export function toJsonLines(orders) {
  const result = orders.map(order => {
    return {
      student: order.student,
      item: order.item
    };
  });

  return JSON.stringify(result);
}