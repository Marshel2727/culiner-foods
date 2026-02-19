function getDesciption() {
  const dcFood = document.getElementById("dcFood");
  
  const params = new URLSearchParams(location.search);
  const foodId = params.get("id");

  if (!foodId) {
    dcFood.textContent = "No food ID provided.";
    return;
  }

  fetch(`./assets/data.json`)
  .then(respons => respons.json())
  .then(data => {
    const foodItem = data.find(row => row.id === foodId)

    if (!foodItem) {
      dcFood.textContent = "Food item not found.";
      return;
    }

    dcFood.innerHTML =`
      <div class="food-detail">
        <div class="detail-hero" style="background-image: url('${foodItem.image}')"></div>
        <div class="detail-body">
          <a href="index.html" class="back">&#8592; kembali</a>
          <h1>${foodItem.title}</h1>
          <p>${foodItem.subtitle}</p>
          <div id="detailBody"></div>
          
            <div class="menu-detail">
              <div class="stats">
                <span class="label">Label</span>
                <span class="value">${foodItem.label}</span>
              </div>

              <div class="stats">
                <span class="label">Harga</span>
                <span class="value">${foodItem.harga}</span>
              </div>

              <div class="stats">
                <span class="label">Kalori</span>
                <span class="value">${foodItem.kalori}</span>
              </div>

              <div class="stats">
                <span class="label">Porsi</span>
                <span class="value">${foodItem.porsi}</span>
              </div>

              <div class="stats">
                <span class="label">Waktu</span>
                <span class="value">${foodItem.waktu_masak}</span>
              </div>
            </div>

        </div>
      </div>
    `;

    const detailBody = document.getElementById("detailBody");
    const paragraps = (foodItem.detail_description || "").split(/\n+/);

    paragraps.forEach(element => {
      const trimmed = element.trim();
      const p = document.createElement("p");
      p.textContent = trimmed;
      detailBody.appendChild(p);
    });

  })
}

getDesciption();