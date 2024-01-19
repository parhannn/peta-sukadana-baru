// Wait for the page to fully load
window.addEventListener("load", function () {
  // Select the loader element
  var loader = document.getElementById("loader");

  // Add a delay before hiding the loader (in milliseconds)
  var delayInMilliseconds = 1500; // Adjust the delay as needed

  setTimeout(function () {
    // Hide the loader after the delay
    loader.classList.add("hidden");
  }, delayInMilliseconds);
});
