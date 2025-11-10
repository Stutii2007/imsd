// Add new recommendation
document.getElementById("submit-rec").addEventListener("click", function () {
  const recText = document.getElementById("new-rec").value.trim();
  if (recText === "") {
    alert("Please write something before submitting!");
    return;
  }

  const newP = document.createElement("p");
  newP.textContent = recText;
  document.getElementById("rec-list").appendChild(newP);

  // Confirmation pop-up
  alert("Thank you! Your recommendation has been added successfully.");

  // Clear textarea
  document.getElementById("new-rec").value = "";
});
