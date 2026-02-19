function getItems() {
  fetch("./assets/data.json")
    .then(response => response.json())
    .then(menus => {
      menus.forEach(menu => {
        const menuCard = document.createElement("div");
        const listMenu = document.getElementById("listMenu");
        const menuUrl = `detail.html?id=${menu.id}`;

        menuCard.style.backgroundImage = `url(${menu.image})`
        menuCard.className = "menuCard";
        menuCard.innerHTML = `
          <div class="menu-info">
            <h1 class="title">${menu.title}</h1>
            <p class="sub-title">${menu.subtitle}</p>
            
            <div class="menu-detail">
              <div class="stats">
                <span class="label">Label</span>
                <span class="value">${menu.label}</span>
              </div>

              <div class="stats">
                <span class="label">Harga</span>
                <span class="value">${menu.harga}</span>
              </div>

              <div class="stats">
                <span class="label">Kalori</span>
                <span class="value">${menu.kalori}</span>
              </div>

              <div class="stats">
                <span class="label">Porsi</span>
                <span class="value">${menu.porsi}</span>
              </div>

              <div class="stats">
                <span class="label">Waktu</span>
                <span class="value">${menu.waktu_masak}</span>
              </div>
            </div>
          </div>
        `;

        const conten = menuCard.querySelector(".menu-info");

        if (conten) {
          conten.onclick = () => {
            window.location.href = menuUrl;
          }
        }

        listMenu.appendChild(menuCard);
      });
    })
}

getItems();