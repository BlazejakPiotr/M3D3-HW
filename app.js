function getPhotos() {
  fetch("https://api.pexels.com/v1/search?query=car", {
    method: "GET",
    headers: {
      Authorization:
        "Bearer 563492ad6f9170000100000179cbeb3e068e4baea1829fa0091fa6c1",
    },
  })
    .then((response) => response.json())
    .then((body) => {
      loadImages(body);
    })
    .catch((err) => {
      console.error(err);
    });
}

const row = document.getElementById("album");
function loadImages(body) {
  row.innerHTML = "";
  for (let photo of body.photos) {
    const photoElement = document.createElement("div");
    photoElement.classList.add("col-md-4");
    photoElement.innerHTML = `
              <div class="card mb-4 shadow-sm">
                <svg class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: Thumbnail">
                  <title>POCO</title>
                  <rect width="100%" height="100%" fill="#55595c"></rect>
                  <text x="50%" y="50%" fill="#eceeef" dy=".3em">
                    <img src="${photo.src.medium}">
                  </text>
                </svg>
                <div class="card-body">
                  <p class="card-text">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </p>
                  <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group">
                      <button type="button" class="btn btn-sm btn-outline-secondary">
                        View
                      </button>
                      <button type="button" class="btn btn-sm btn-outline-secondary" onclick="hideCard(this.value)">
                        Hide
                      </button>
                    </div>
                    <small class="text-muted">9 mins</small>
                  </div>
                </div>
              </div>
           `;
    row.appendChild(photoElement);
  }
}

function getSecondaryPhotos() {
  fetch("https://api.pexels.com/v1/search?query=nautre", {
    method: "GET",
    headers: {
      Authorization:
        "Bearer 563492ad6f9170000100000179cbeb3e068e4baea1829fa0091fa6c1",
    },
  })
    .then((response) => response.json())
    .then((body) => {
      loadSecondaryPhotos(body);
    })
    .catch((err) => {
      console.error(err);
    });
}
function loadSecondaryPhotos(body) {
  row.innerHTML = "";
  for (let photo of body.photos) {
    const photoElement = document.createElement("div");
    photoElement.setAttribute("id", `${photo.id}`);
    photoElement.classList.add("col-md-4");
    photoElement.innerHTML = `
              <div class="card mb-4 shadow-sm">
                <img src="${photo.src.medium}">
                <div class="card-body">
                  <p class="card-text">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </p>
                  <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group">

                      <button type="button" class="btn btn-sm btn-outline-secondary">
                      View
                      </button>
                                            <button onclick="hideCard(${photo.id})" type="button" class="btn btn-sm btn-outline-secondary">
                        Hide
                      </button>
                    </div>
                    <small class="text-muted">${photo.id}</small>
                  </div>
                </div>
              </div>
           `;
    row.appendChild(photoElement);
  }
}

function hideCard(id) {
  let test = document.getElementById(`${id}`);
  test.remove();
}
