// Button click - Change background color
document.getElementById("colorBtn").addEventListener("click", function () {
    this.style.backgroundColor = "lightgreen";
    this.textContent = "🎉 Color Changed!";
  });
  
  // Image Slideshow
  let imgIndex = 1;
  function nextImage() {
    imgIndex++;
    if (imgIndex > 3) imgIndex = 1;
    document.getElementById("slideshow-img").src =
      "https://via.placeholder.com/300x200?text=Image+" + imgIndex;
  }
  
  // Accordion
  function toggleAccordion() {
    const content = document.getElementById("accordion-content");
    content.style.display = content.style.display === "none" ? "block" : "none";
  }
  
  // Keypress Detection
  document.getElementById("keypressInput").addEventListener("keypress", function (e) {
    console.log("You pressed: " + e.key);
  });
  
  // Double-click action
  function revealSecret() {
    alert("🎉 You found the secret message!");
  }
  
  // Form Validation
  function validateForm() {
    const email = document.getElementById("email");
    const password = document.getElementById("password");
    const message = document.getElementById("formMsg");
  
    if (!email.value.includes("@")) {
      message.textContent = "❌ Please enter a valid email.";
      message.style.color = "red";
      return false;
    }
  
    if (password.value.length < 8) {
      message.textContent = "❌ Password must be at least 8 characters.";
      message.style.color = "red";
      return false;
    }
  
    message.textContent = "✅ Form submitted successfully!";
    message.style.color = "green";
    return true;
  }
  