document.addEventListener("DOMContentLoaded", function () {
    // Array of spotlight members
    const spotlightMembers = [
        {
            name: "John Doe",
            company: "Doe Enterprises",
            image: "images/member1.jpg",
            description: "John is a long-time member of the Chamber and a key player in local business development."
        },
        {
            name: "Jane Smith",
            company: "Smith Industries",
            image: "images/member2.jpg",
            description: "Jane is known for her leadership in the tech sector and community outreach."
        },
        {
            name: "Alice Brown",
            company: "Brown Group",
            image: "images/member3.jpg",
            description: "Alice is an advocate for small business growth and an active mentor in the Chamber."
        }
    ];

    // Reference to the spotlight container
    const spotlightContainer = document.getElementById("spotlight-cards");

    // Loop through the spotlight members and dynamically create HTML for each one
    spotlightMembers.forEach(member => {
        const memberCard = document.createElement("div");
        memberCard.classList.add("spotlight-card");

        // Injecting HTML content for each member
        memberCard.innerHTML = `
            <img src="${member.image}" alt="${member.name}" class="spotlight-image" />
            <h3>${member.name}</h3>
            <p class="company">${member.company}</p>
            <p class="description">${member.description}</p>
        `;

        // Appending the created card to the container
        spotlightContainer.appendChild(memberCard);
    });
});
