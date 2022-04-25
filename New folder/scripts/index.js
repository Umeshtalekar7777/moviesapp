// Store the wallet amount to your local storage with key "amount"

function addmoney() {
  let input = document.querySelector("#amount").value;
  let amount = JSON.parse(localStorage.getItem("amount")) || [];
  amount.push(input);
  localStorage.setItem("amount", JSON.stringify(amount));
  document.querySelector("#input").value = null;
}
