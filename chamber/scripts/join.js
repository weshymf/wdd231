document.getElementById("timestamp").value = new Date().toISOString();

function openModal(id) {
    document.getElementById(id).showModal();
}

function closeModal(id) {
    document.getElementById(id).close();
}
