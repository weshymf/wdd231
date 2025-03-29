const params = new URLSearchParams(window.location.search);
document.getElementById("firstName").textContent = params.get("firstName");
document.getElementById("lastName").textContent = params.get("lastName");
document.getElementById("email").textContent = params.get("email");
document.getElementById("phone").textContent = params.get("phone");
document.getElementById("businessName").textContent = params.get("businessName");
document.getElementById("timestamp").textContent = params.get("timestamp");
