document.getElementById("btn-history").addEventListener("click", function () {
  showSelectionById("history");
  document.getElementById("btn-donate").classList.remove("bg-btn-color");
  document.getElementById("btn-history").classList.add("bg-btn-color");
});

document.getElementById("btn-donate").addEventListener("click", function () {
  showSelectionById("donate");
  document.getElementById("btn-history").classList.remove("bg-btn-color");
  document.getElementById("btn-donate").classList.add("bg-btn-color");
});

// Calculate Noakhali Donate
document.getElementById("btn-noakhali").addEventListener("click", function () {
  const date = new Date();
  let inputValue = parseFloat(document.getElementById("input-noakhali").value);
  const title = document.getElementById("NoakhaliTitle").innerText;
  let noakhaliAmount = parseFloat(document.getElementById("amount-noakhali").innerText);
  let amount = parseFloat(document.getElementById("totalAmount").innerText);

  if (document.getElementById("input-noakhali").value === "") {
    return alert("Please Donate Any Amount");
  } else if (isNaN(inputValue)) {
    return alert("Not a Number");
  } else {
    const totalNoakhaliAmount = inputValue + noakhaliAmount;
    document.getElementById("amount-noakhali").innerText = totalNoakhaliAmount;
    const mainbalance = amount - inputValue;
    document.getElementById("totalAmount").innerText = mainbalance;
    modalOpen('dialog');
    transactionHistory(inputValue,title,date);
  }
});

// Calculate Feni Donate
document.getElementById("btn-feni").addEventListener("click", function () {
  const date = new Date();
  let inputValue = parseFloat(document.getElementById("input-feni").value);
  let feniAmount = parseFloat(document.getElementById("amount-feni").innerText);
  let amount = parseFloat(document.getElementById("totalAmount").innerText);
  const title = document.getElementById("feniTitle").innerText;
  
  
  if (document.getElementById("input-feni").value === "") {
    return alert("Please Donate Any Amount");
  } else if (isNaN(inputValue)) {
    return alert("Not a Number");
  } else {
    const totalFeniAmount = inputValue + feniAmount;
    document.getElementById("amount-feni").innerText = totalFeniAmount;
    const mainbalance = amount - inputValue;
    document.getElementById("totalAmount").innerText = mainbalance;
    modalOpen('dialog');
    transactionHistory(inputValue,title,date);
  }
});

// Calculate Quota Movement

document.getElementById("btn-quota").addEventListener("click", function () {
  const date = new Date();
  let inputValue = parseFloat(document.getElementById("input-quota").value);
  let feniAmount = parseFloat(document.getElementById("amount-quota").innerText);
  let amount = parseFloat(document.getElementById("totalAmount").innerText);
  const title = document.getElementById("quotaTitle").innerText;


  
  if (document.getElementById("input-quota").value === "") {
    return alert("Please Donate Any Amount");
  } else if (isNaN(inputValue)) {
    return alert("Not a Number");
  } else {
    const totalFeniAmount = inputValue + feniAmount;
    document.getElementById("amount-quota").innerText = totalFeniAmount;
    const mainbalance = amount - inputValue;
    document.getElementById("totalAmount").innerText = mainbalance;
    modalOpen('dialog');
    transactionHistory(inputValue,title,date);
  }
});
