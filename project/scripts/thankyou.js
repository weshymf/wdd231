document.addEventListener("DOMContentLoaded", () => {
    const params = new URLSearchParams(window.location.search);
    const summaryList = document.getElementById("form-summary");
  
    const entries = {
      "Full Name": params.get("fullname"),
      "Email": params.get("email"),
      "Favorite Game": params.get("favorite-game") || "Not provided",
      "Subscribed": params.get("subscribe") ? "Yes" : "No",
      "Feedback": params.get("feedback"),
    };
  
    Object.entries(entries).forEach(([key, value]) => {
      const li = document.createElement("li");
      li.innerHTML = `<strong>${key}:</strong> ${value}`;
      summaryList.appendChild(li);
    });
  });
  