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
  
  let noakhaliAmount = parseFloat(
    document.getElementById("amount-noakhali").innerHTML
  );
  let amount = parseFloat(document.getElementById("totalAmount").innerHTML);
  createHistory(inputValue,title,date)
  document.getElementById("donate-date").innerText = date;
  if (document.getElementById("input-noakhali").value === "") {
    return alert("Please Donate Any Amount");
  } else if (isNaN(inputValue)) {
    return alert("Not a Number");
  } else {
    const totalNoakhaliAmount = inputValue + noakhaliAmount;
    document.getElementById("amount-noakhali").innerHTML = totalNoakhaliAmount;
    const mainbalance = amount - inputValue;
    document.getElementById("totalAmount").innerHTML = mainbalance;
    modalOpen('dialog')
    
  }
});

// Calculate Feni Donate
document.getElementById("btn-feni").addEventListener("click", function () {
  let inputValue = parseFloat(document.getElementById("input-feni").value);
  let feniAmount = parseFloat(document.getElementById("amount-feni").innerHTML);
  let amount = parseFloat(document.getElementById("totalAmount").innerHTML);

  if (document.getElementById("input-feni").value === "") {
    return alert("Please Donate Any Amount");
  } else if (isNaN(inputValue)) {
    return alert("Not a Number");
  } else {
    const totalFeniAmount = inputValue + feniAmount;
    document.getElementById("amount-feni").innerHTML = totalFeniAmount;
    const mainbalance = amount - inputValue;
    document.getElementById("totalAmount").innerHTML = mainbalance;
    modalOpen('dialog')
  }
});

// Calculate Quota Movement

document.getElementById("btn-quota").addEventListener("click", function () {
  let inputValue = parseFloat(document.getElementById("input-quota").value);
  let feniAmount = parseFloat(
    document.getElementById("amount-quota").innerHTML
  );
  let amount = parseFloat(document.getElementById("totalAmount").innerHTML);

  if (document.getElementById("input-quota").value === "") {
    return alert("Please Donate Any Amount");
  } else if (isNaN(inputValue)) {
    return alert("Not a Number");
  } else {
    const totalFeniAmount = inputValue + feniAmount;
    document.getElementById("amount-quota").innerHTML = totalFeniAmount;
    const mainbalance = amount - inputValue;
    document.getElementById("totalAmount").innerHTML = mainbalance;
    modalOpen('dialog')
  }
});
