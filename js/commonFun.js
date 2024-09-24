function showSelectionById(id){
    document.getElementById("donate").classList.add("hidden");
    document.getElementById("history").classList.add("hidden");
    document.getElementById("blog").classList.add("hidden");
    document.getElementById(id).classList.remove("hidden")
}

function modalOpen(id){
    const dialog = document.getElementById(id);
    dialog.showModal();
}

function transactionHistory(inputValue, title, date){
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

}