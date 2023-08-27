const editableDiv = document.querySelector("#editable_div");
const heading = document.querySelector("#heading");
localStorage.setItem("heading", localStorage.getItem("heading") || "Dummy");
displayHeading();

// Event Listener
editableDiv.addEventListener("click", editDiv);

// Edit Div Function
function editDiv() {
  const existingTextArea = editableDiv.querySelectorAll("textarea");
  if (existingTextArea.length !== 0) return;
  const textArea = document.createElement("textarea");
  heading.style.display = "none";
  editableDiv.appendChild(textArea);
  textArea.textContent = heading.textContent;
  textArea.addEventListener("blur", (e) => {
    saveToLocalStorage(textArea.value);
    displayHeading();
  });
}

// Save to Local Storage
function saveToLocalStorage(textContent) {
  return localStorage.setItem("heading", textContent);
}

// Read from Local Storage
function readFromLocalStorage() {
  return localStorage.getItem("heading");
}

// Display the data
function displayHeading() {
  heading.style.display = "block";
  heading.textContent = readFromLocalStorage();
  const existingTextArea = editableDiv.querySelectorAll("textarea");
  if (existingTextArea.length !== 0) {
    editableDiv.removeChild(existingTextArea[0]);
  }
}
