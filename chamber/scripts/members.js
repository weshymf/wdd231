// File: scripts/members.js

document.addEventListener("DOMContentLoaded", () => {
    const membersContainer = document.getElementById('members-container');
    const gridViewButton = document.getElementById('grid-view');
    const listViewButton = document.getElementById('list-view');
    let membersData = [];

    // Function to fetch member data from JSON file
    async function fetchMembersData() {
        try {
            const response = await fetch('data/members.json');
            membersData = await response.json();
            displayMembers(membersData);
        } catch (error) {
            console.error("Error fetching member data:", error);
        }
    }

    // Function to display members as a grid
    function displayGridView(members) {
        membersContainer.innerHTML = '';
        members.forEach(member => {
            const memberCard = document.createElement('div');
            memberCard.classList.add('member-card');
            memberCard.innerHTML = `
                <img src="images/${member.image}" alt="${member.name}">
                <h3>${member.name}</h3>
                <p>Address: ${member.address}</p>
                <p>Phone: ${member.phone}</p>
                <p><a href="${member.website}" target="_blank">Website</a></p>
                <p>Membership Level: ${getMembershipLevel(member.membership_level)}</p>
                <p>${member.info}</p>
            `;
            membersContainer.appendChild(memberCard);
        });
    }

    // Function to display members in list view
    function displayListView(members) {
        membersContainer.innerHTML = '';
        members.forEach(member => {
            const memberItem = document.createElement('div');
            memberItem.classList.add('member-item');
            memberItem.innerHTML = `
                <h3>${member.name}</h3>
                <p>Address: ${member.address}</p>
                <p>Phone: ${member.phone}</p>
                <p><a href="${member.website}" target="_blank">Website</a></p>
                <p>Membership Level: ${getMembershipLevel(member.membership_level)}</p>
                <p>${member.info}</p>
            `;
            membersContainer.appendChild(memberItem);
        });
    }

    // Function to get the membership level
    function getMembershipLevel(level) {
        switch (level) {
            case 1: return "Member";
            case 2: return "Silver";
            case 3: return "Gold";
            default: return "Unknown";
        }
    }

    // Toggle between grid view and list view
    gridViewButton.addEventListener('click', () => {
        displayGridView(membersData);
    });

    listViewButton.addEventListener('click', () => {
        displayListView(membersData);
    });

    // Fetch and display members when the page loads
    fetchMembersData();
});
