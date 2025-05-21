
  document.querySelectorAll(".flexible").forEach(btn => {
    btn.addEventListener("click", function () {
      this.classList.toggle("active");
      const content = this.nextElementSibling;
      content.style.display = content.style.display === "block" ? "none" : "block";
    });
  });


  document.querySelectorAll(".project-card").forEach(card => {
    card.addEventListener("click", () => {
      const title = card.getAttribute("data-title");
      const desc = card.getAttribute("data-description");
      document.getElementById("modalTitle").innerText = title;
      document.getElementById("modalDesc").innerText = desc;
      document.getElementById("projectModal").style.display = "block";
    });
  });


  document.querySelector(".close").addEventListener("click", () => {
    document.getElementById("projectModal").style.display = "none";
  });

 
  document.getElementById("contactForm").addEventListener("submit", function (e) {
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();
    if (!name || !email || !message) {
      alert("Please fill in all fields.");
      e.preventDefault();
    } else {
      alert("Message sent successfully!");
    }
  });