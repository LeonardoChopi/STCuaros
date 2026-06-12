// Array de productos
const productos = [
  {
    nombre: "Loto",
    descripcion: "",
    imagenes: ["productos/img/Loto1.jpeg"],
    stock: true,
    precio: 2000,
    medidas: "34 x 46 cm",
    tecnica: "Acrílico"
  },
  {
    nombre: "Sunflowers",
    descripcion: "",
    imagenes: ["productos/img/Sunflowers1.jpeg"],
    stock: true,
    precio: 2500,
    medidas: "38 x 50 cm",
    tecnica: "Acrílico"
  },
  {
    nombre: "Deseos",
    descripcion: "",
    imagenes: ["productos/img/Deseos1.jpeg"],
    stock: true,
    precio: 2000,
    medidas: "32 x 51 cm",
    tecnica: "Acrílico"
  },
  {
    nombre: "Rojo Carmesí",
    descripcion: "",
    imagenes: ["productos/img/RojoCarmesi1.jpeg"],
    stock: true,
    precio: 2500,
    medidas: "34 x 60 cm",
    tecnica: "Acrílico"
  },
  {
    nombre: "Estilo Japonés",
    descripcion: "",
    imagenes: ["productos/img/EstiloJapones1.jpeg"],
    stock: true,
    precio: 2000,
    medidas: "23 x 64 cm",
    tecnica: "Acrílico"
  },
  {
    nombre: "Perfiles",
    descripcion: "",
    imagenes: ["productos/img/Perfiles1.jpeg"],
    stock: true,
    precio: 2500,
    medidas: "40 x 50 cm",
    tecnica: "Acrílico"
  },
  {
    nombre: "Mujer Mariposa",
    descripcion: "",
    imagenes: ["productos/img/MujerMariposa1.jpeg"],
    stock: true,
    precio: 2500,
    medidas: "34 x 62 cm",
    tecnica: "Acrílico"
  },
  {
    nombre: "Pirámides de Giza",
    descripcion: "",
    imagenes: ["productos/img/PiramidesDeGiza1.jpeg"],
    stock: true,
    precio: 2000,
    medidas: "42 x 42 cm",
    tecnica: "Acrílico"
  },
  {
    nombre: "Rosas de la India",
    descripcion: "",
    imagenes: ["productos/img/RosasDeLaIndia1.jpeg"],
    stock: true,
    precio: 2000,
    medidas: "38 x 50 cm",
    tecnica: "Acrílico"
  },
  {
    nombre: "Saxofonista",
    descripcion: "",
    imagenes: ["productos/img/Saxofonista1.jpeg"],
    stock: true,
    precio: 2000,
    medidas: "40 x 50 cm",
    tecnica: "Acrílico"
  },
  {
    nombre: "Ommm",
    descripcion: "",
    imagenes: ["productos/img/Ommm1.jpeg"],
    stock: true,
    precio: 2500,
    medidas: "41 x 51 cm",
    tecnica: "Acrílico"
  },
  {
    nombre: "Noche de Jazz",
    descripcion: "",
    imagenes: ["productos/img/NocheDeJazz1.jpeg"],
    stock: true,
    precio: 2000,
    medidas: "40 x 50 cm",
    tecnica: "Acrílico"
  },
  {
    nombre: "Geometría",
    descripcion: "",
    imagenes: ["productos/img/Geometria1.jpeg"],
    stock: true,
    precio: 2500,
    medidas: "40 x 58 cm",
    tecnica: "Acrílico"
  },
  {
    nombre: "Descanso",
    descripcion: "",
    imagenes: ["productos/img/Descanso1.jpeg"],
    stock: true,
    precio: 2000,
    medidas: "41 x 43 cm",
    tecnica: "Acrílico"
  },
  {
    nombre: "Rosas",
    descripcion: "",
    imagenes: ["productos/img/Rosas1.jpeg"],
    stock: true,
    precio: 2000,
    medidas: "40 x 56 cm",
    tecnica: "Acrílico"
  },
  {
    nombre: "El Mensaje",
    descripcion: "",
    imagenes: ["productos/img/ElMensaje1.jpeg"],
    stock: true,
    precio: 2000,
    medidas: "34 x 48 cm",
    tecnica: "Acrílico"
  },
  {
    nombre: "Makeda",
    descripcion: "",
    imagenes: ["productos/img/Makeda1.jpeg"],
    stock: true,
    precio: 2000,
    medidas: "35 x 46 cm",
    tecnica: "Acrílico"
  },
  {
    nombre: "Colibrí 1",
    descripcion: "",
    imagenes: ["productos/img/Colibri1.jpeg"],
    stock: true,
    precio: 2000,
    medidas: "32 x 48 cm",
    tecnica: "Acrílico"
  },
  {
    nombre: "Danza Africana",
    descripcion: "",
    imagenes: ["productos/img/DanzaAfricana1.jpeg"],
    stock: true,
    precio: 2500,
    medidas: "42 x 69 cm",
    tecnica: "Técnicas varias con volumen"
  },
  {
    nombre: "Doble Faz",
    descripcion: "",
    imagenes: ["productos/img/DobleFaz1.jpeg"],
    stock: true,
    precio: 2000,
    medidas: "57 x 40 cm",
    tecnica: "Acrílico"
  },
  {
    nombre: "Mirada de Ébano",
    descripcion: "",
    imagenes: ["productos/img/MiradaDeEbano1.jpeg"],
    stock: true,
    precio: 2000,
    medidas: "30 x 61 cm",
    tecnica: "Técnicas varias con volumen"
  },
  {
    nombre: "Emperatriz",
    descripcion: "",
    imagenes: ["productos/img/Emperatriz1.jpeg"],
    stock: true,
    precio: 2000,
    medidas: "34 x 46 cm",
    tecnica: "Acrílico"
  },
  {
    nombre: "Frida Enamorada",
    descripcion: "",
    imagenes: ["productos/img/FridaEnamorada1.jpeg"],
    stock: true,
    precio: 2000,
    medidas: "40 x 50 cm",
    tecnica: "Acrílico"
  },
  {
    nombre: "Libertad",
    descripcion: "",
    imagenes: ["productos/img/Libertad1.jpeg"],
    stock: true,
    precio: 2500,
    medidas: "40 x 50 cm",
    tecnica: "Acrílico"
  },
  {
    nombre: "Concierto",
    descripcion: "",
    imagenes: ["productos/img/Concierto1.jpeg"],
    stock: true,
    precio: 2500,
    medidas: "62 x 35 cm",
    tecnica: "Acrílico"
  }
];

// Renderizado dinámico de productos
document.addEventListener("DOMContentLoaded", () => {
  const lista = document.querySelector(".product-list");
  if (!lista) return;
  lista.innerHTML = "";
  productos.forEach((producto, idx) => {
    const item = document.createElement("div");
    item.className = "product-item";

    // Galería de imágenes
    let galeria = "";
    if (producto.imagenes && producto.imagenes.length > 0) {
      galeria = `<div class="product-gallery">` +
        producto.imagenes.map((img, i) =>
          `<img src="${img}" alt="${producto.nombre} ${i+1}" class="${i === 0 ? 'active' : ''}" data-idx="${idx}" data-img="${i}" onerror="this.onerror=null;this.src='img/default.jpg';">`
        ).join("") +
        `</div>`;
    } else {
      galeria = `<div class="product-gallery"><img src="img/default.jpg" alt="${producto.nombre} default" class="active" data-idx="${idx}" data-img="0"></div>`;
    }

    // Stock
    const stockHtml = producto.stock
      ? '<span class="stock stock-true">En stock</span>'
      : '<span class="stock stock-false">Sin stock</span>';

    let precioHtml = "";
    if (producto.precio !== false && producto.precio !== undefined) {
      if (producto.descuento) {
        const precioFinal = Math.round(producto.precio * (1 - producto.descuento / 100));
        precioHtml = '<div class="product-price">' +
          '<span class="precio-original">$' + producto.precio + '</span>' +
          '<span class="precio-final">$' + precioFinal + '</span>' +
          '<span class="precio-off">' + producto.descuento + '% OFF</span>' +
          '</div>';
      } else {
        precioHtml = '<div class="product-price"><strong>$' + producto.precio + '</strong></div>';
      }
    } else {
      precioHtml = "";
    }

    // Medidas y técnica
    const medidasHtml = producto.medidas
      ? '<span class="producto-medidas">' + producto.medidas + '</span>'
      : '';
    const tecnicaHtml = producto.tecnica
      ? '<span class="producto-tecnica">' + producto.tecnica + '</span>'
      : '';
    const metaHtml = (medidasHtml || tecnicaHtml)
      ? '<div class="producto-meta">' + medidasHtml + tecnicaHtml + '</div>'
      : '';

    item.innerHTML =
      galeria +
      '<h3>' + producto.nombre + '</h3>' +
      metaHtml +
      precioHtml +
      stockHtml +
      '<div class="product-thumbs">' +
        ((producto.imagenes && producto.imagenes.length > 0)
          ? producto.imagenes.map(function(img, i) {
              return '<img src="' + img + '" alt="' + producto.nombre + ' miniatura" class="thumb" data-idx="' + idx + '" data-img="' + i + '" onerror="this.onerror=null;this.src=\'img/default.jpg\';">';
            }).join("")
          : '<img src="img/default.jpg" alt="' + producto.nombre + ' miniatura" class="thumb" data-idx="' + idx + '" data-img="0">'
        ) +
      '</div>';
    lista.appendChild(item);
  });

  // Selección de imágenes
  document.querySelectorAll('.product-thumbs .thumb').forEach(thumb => {
    thumb.addEventListener('click', function() {
      const idx = this.getAttribute('data-idx');
      const imgIdx = this.getAttribute('data-img');
      const gallery = document.querySelectorAll(`.product-gallery img[data-idx='${idx}']`);
      gallery.forEach((img, i) => {
        img.classList.toggle('active', i == imgIdx);
      });
    });
  });
});