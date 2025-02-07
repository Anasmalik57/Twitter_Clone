const postbtn = document.querySelector(".post-btn");
// const postbtn1 = document.querySelector(".postbtnblue");

const postInputField = document.querySelector(".post-input-field");

// Initially set the button to red
postbtn.classList.replace("bg-opacity-100", "bg-opacity-70");
// postbtn1.classList.replace("bg-opacity-100", "bg-opacity-80");

// Listen for input changes in the field
postInputField.addEventListener("input", () => {
  const inputValue = postInputField.value.trim(); // Get input value

  if (inputValue === "") {
    postbtn.classList.replace("bg-opacity-100", "bg-opacity-70"); // Keep the button red if input is empty
    // postbtn1.classList.replace("bg-opacity-100", "bg-opacity-80"); // Keep the button red if input is empty
  } else {
    postbtn.classList.replace("bg-opacity-70", "bg-opacity-100"); // Change to white when input starts
    // postbtn1.classList.replace("bg-opacity-80", "bg-opacity-100"); // Change to white when input starts
  }
});
// ////////////////////////////////
const foryoubtn = document.querySelector(".foryou");
const followingbtn = document.querySelector(".followingbtn");
const trackme = document.querySelector(".trackeme");

// Ensure the elements exist before adding event listeners
// if (foryoubtn && followingbtn && trackme) {
//   foryoubtn.addEventListener("click", () => {
//     // Add fallback in case the classes don't exist
//     trackme.classList.remove("left-[17%]", "lg:left-[17%]");
//     trackme.classList.add("left-[63%]", "lg:left-[63%]");
//   });

//   followingbtn.addEventListener("click", () => {
//     // Add fallback in case the classes don't exist
//     trackme.classList.remove("left-[63%]", "lg:left-[63%]");
//     trackme.classList.add("left-[17%]", "lg:left-[17%]");
//   });
// } else {
//   console.error("One or more elements not found!");
// }

// 1:49:15