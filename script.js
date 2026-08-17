fetch("data/levels.json")
  .then((response) => response.json())
  .then((levels) => {
    const demonList = document.querySelector(".demon-list");

    levels.forEach((level, index) => {
      const rank = index + 1;

      const entry = document.createElement("article");
      entry.classList.add("demon-entry");

      if (rank <= 3) {
        entry.classList.add(`top-${rank}`);
      }

      entry.innerHTML = `
                <div class="demon-rank">#${rank}</div>

                <div class="demon-thumbnail">
                    <img src="${level.thumbnail}" alt="${level.name} thumbnail">
                </div>

                <div class="demon-info">
                    <h2>${level.name}</h2>
                    <p>${level.creator}</p>
                    <p class="demon-tier ${level.tier.toLowerCase().replace(" ", "-")}">${level.tier}</p>
                    ${level.video ? `<a href="${level.video}" target="_blank">Video</a>` : ""}
                </div>
            `;

      demonList.appendChild(entry);
    });
  })
  .catch((error) => {
    console.error("Failed to load levels:", error);
  });
