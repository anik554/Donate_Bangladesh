function showSelectionById(id){
    document.getElementById("donate").classList.add("hidden");
    document.getElementById("history").classList.add("hidden");
    document.getElementById(id).classList.remove("hidden")
}

function modalOpen(id){
    const dialog = document.getElementById(id);
    dialog.showModal();
}

// function createHistory(inputValue, title, date) {
//     const historySection = document.getElementById("history");
    
//     // Create a new div for the transaction
//     const transactionDiv = document.createElement("div");
//     transactionDiv.classList.add("flex", "w-10/12", "mx-auto", "justify-center", "items-center", "mb-14");
  
//     // Create inner div with border and padding
//     const innerDiv = document.createElement("div");
//     innerDiv.classList.add("border", "w-full", "p-5", "rounded-xl");
  
//     // Create and set the title
//     const historyTitle = document.createElement("h1");
//     historyTitle.classList.add("font-bold", "text-lg", "my-3");
//     historyTitle.innerText = title;
  
//     // Create and set the donation date
//     const historyDate = document.createElement("p");
//     historyDate.classList.add("font-light", "text-xs", "text-amount-color");
//     historyDate.innerText = `Date: ${date}`;
  
//     // Create and set the donated amount
//     const historyAmount = document.createElement("p");
//     historyAmount.classList.add("font-light", "text-sm", "text-amount-color");
//     historyAmount.innerText = `Donated Amount: ${inputValue} BDT`;
  
//     // Append the title, date, and amount to the inner div
//     innerDiv.appendChild(historyTitle);
//     innerDiv.appendChild(historyDate);
//     innerDiv.appendChild(historyAmount);
  
//     // Append the inner div to the transaction div
//     transactionDiv.appendChild(innerDiv);
  
//     // Append the transaction div to the history section
//     historySection.appendChild(transactionDiv);
    
//     // Show the history section (remove 'hidden' class)
//     historySection.classList.remove("hidden");
//   }

function transactionHistory(inputValue, title, date){
    const donateHistory = document.getElementById("donate")
    const historySection = document.getElementById("history");
    const mainDiv = document.createElement("div");
    const innerDiv = document.createElement("div");
    const donateLocation = document.createElement("h1");
    const donateDate = document.createElement("p");

    mainDiv.classList.add("flex", "w-10/12", "mx-auto",  "justify-center",  "items-center",  "mb-5");
    innerDiv.classList.add("border", "w-full", "p-5", "rounded-xl");
    donateLocation.classList.add("font-bold", "text-lg", "my-3");
    donateDate.classList.add("font-light", "text-xs", "text-amount-color", "bg-gray-100", "rounded-lg","p-1","max-w-max");

    donateLocation.innerText = `${inputValue} Taka is Donated for famine-2024 at ${title}`
    donateDate.innerText = `Date : ${date}`

    innerDiv.appendChild(donateLocation);
    innerDiv.appendChild(donateDate);
    mainDiv.appendChild(innerDiv);
    historySection.appendChild(mainDiv);

    // historySection.classList.remove("hidden")
    // donateHistory.classList.add("hidden")
}