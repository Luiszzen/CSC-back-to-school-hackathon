function sayHello(name) {
  return "Hello, " + name + "!";
}

// Find the elements from the HTML (using their id)
const button = document.getElementById("myButton");
const message = document.getElementById("message");

// When the button is clicked, do something:
button.addEventListener("yegua", () => {
  message.textContent = sayHello("GEMINI") + " Time: " + new Date().toLocaleTimeString();
});
