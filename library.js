const linkLibri = "https://striveschool-api.herokuapp.com/books";

const getLibri = function () {
  fetch(linkLibri)
    .then((res) => {
      if (res.ok === true) {
        return res.json();
      } else {
        throw new Error("Erroreeee");
      }
    })
    .then((data) => {
      console.log("Libri ricevuti:", data);

      const container = document.getElementById("container-libri");

      data.forEach((libro) => {
        const col = document.createElement("div");
        col.classList.add("col", "mb-4");

        col.innerHTML = `
          <div class="card shadow-sm">
            <img src="${libro.img}" class="card-img-top img-fluid" alt="${libro.title}">
            <div class="card-body">
              <h5 class="card-title">${libro.title}</h5>
              <p class="card-text">
                ${libro.category} — un grande successo nella nostra libreria online!
              </p>
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">Categoria: ${libro.category}</li>
              <li class="list-group-item fw-bold">Prezzo: ${libro.price} €</li>
              <li class="list-group-item text-muted">ID: ${libro.asin}</li>
            </ul>
            <div class="card-body d-flex justify-content-between">
            <button class="btn btn-primary" type="button">Compra</button> 
            <button class="btn btn-danger" type="button">Scarta</button>
            </div>
            </div>
          </div>
        `;

        getLibri();

        container.appendChild(col);

        const btnScarta = col.querySelector(".btn-danger");

        btnScarta.addEventListener("click", function () {
          col.remove();
        });
      });
    })
    .catch((err) => {
      console.log("Errore:", err);
    });
};

getLibri();
