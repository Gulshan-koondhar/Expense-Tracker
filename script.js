const inputElName = document.querySelector("#inputname");
const inputElPrice = document.querySelector("#inputprice");
const listContainer = document.querySelector("#listContainer");
const total = document.querySelector(".total");
const btn = document.querySelector("#btn");

let expense = [];

function add() {
  if (inputElName.value !== "" && inputElPrice.value !== "") {
    const li = document.createElement("li");
    li.innerHTML = inputElName.value;
    listContainer.appendChild(li);
    const span = document.createElement("span");
    span.innerHTML = inputElPrice.value;
    li.appendChild(span);
    let amount = parseInt(span.innerHTML);
    expense.push(amount);
    const expenseList = document.getElementById("expenseList");
    expenseList.innerHTML = "";
    expense.forEach((expenses) => {
      const li = document.createElement("li");
      li.innerHTML = "$" + expenses.toFixed(2);
      expenseList.appendChild(li);
    });

    const totalExpense = document.getElementById("totalExpense");
    const total = expense.reduce((acc, curr) => acc + curr, 0);
    totalExpense.textContent = "Total Expense: $" + total.toFixed(2);
    inputElName.value = "";
    inputElPrice.value = "";
  } else {
    alert("Enter the Item Name and Price");
  }
}

btn.addEventListener("click", () => {
  listContainer.innerHTML = "";
  totalExpense.textContent = "";
});
