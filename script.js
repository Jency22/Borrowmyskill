let skills = [];

function addSkill() {

    let title = document.getElementById("title").value;
    let category = document.getElementById("category").value;
    let price = document.getElementById("price").value;
    let type = document.getElementById("type").value;
    let desc = document.getElementById("desc").value;
    let availability = document.getElementById("availability").value;

    if (category === "") {
        alert("Please select a category");
        return;
    }

    let skill = {
        title,
        category,
        price,
        type,
        desc,
        availability
    };

    skills.push(skill);

    displaySkills();
}

function displaySkills() {

    let container = document.getElementById("skills-container");

    container.innerHTML = "";

    skills.forEach((s, index) => {
        container.innerHTML += `
        <div class="card">
            <h3>${s.title}</h3>
            <p>${s.category}</p>
            <p>${s.price} (${s.type})</p>
            <p>${s.desc}</p>
            <p>${s.availability}</p>
            <button onclick="deleteSkill(${index})">Delete</button>
        </div>
        `;
    });
}

function deleteSkill(index) {
    skills.splice(index, 1);
    displaySkills();
}