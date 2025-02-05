const postbtn = document.querySelector(".post-btn");
const postInputField = document.querySelector(".post-input-field");

// Initially set the button to red
postbtn.classList.replace("bg-opacity-100", "bg-opacity-70");

// Listen for input changes in the field
postInputField.addEventListener("input", () => {
  const inputValue = postInputField.value.trim(); // Get input value

  if (inputValue === "") {
    postbtn.classList.replace("bg-opacity-100", "bg-opacity-70"); // Keep the button red if input is empty
  } else {
    postbtn.classList.replace("bg-opacity-70", "bg-opacity-100"); // Change to white when input starts
  }
});
