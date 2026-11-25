// Urban Shoes - Catálogo de dama y caballero
// Las rutas de las imágenes corresponden exactamente a los archivos de la carpeta imagenes.

const NUMERO_WHATSAPP = "573114123750";
const PRECIO = "$150.000";

const zapatosDama = [
  {
    "nombre": "Adidas casual blanco y gris",
    "imagen": "adidas_casual_blanco_gris.jpg"
  },
  {
    "nombre": "Adidas casual negro con estampado animal",
    "imagen": "adidas_casual_negro_estampado.jpg"
  },
  {
    "nombre": "Adidas Superstar blanco y negro",
    "imagen": "adidas_superstar_blanco_negro.jpg"
  },
  {
    "nombre": "Adidas Superstar blanco, negro y vino",
    "imagen": "adidas_superstar_blanco_negro_vino.jpg"
  },
  {
    "nombre": "Adidas Superstar negro y gris",
    "imagen": "adidas_superstar_negro_gris.jpg"
  },
  {
    "nombre": "New Balance chunky negro y gris",
    "imagen": "new_balance_chunky_negro_gris.jpg"
  },
  {
    "nombre": "New Balance gris y blanco",
    "imagen": "new_balance_gris_blanco.jpg"
  },
  {
    "nombre": "New Balance negro",
    "imagen": "new_balance_negro.jpg"
  },
  {
    "nombre": "Tenis casual blanco",
    "imagen": "tenis_casual_blanco.jpg"
  },
  {
    "nombre": "Adidas Superstar rosa con franjas negras",
    "imagen": "adidas_superstar_rosa_negro.jpg"
  },
  {
    "nombre": "New Balance casual blanco y gris",
    "imagen": "new_balance_casual_blanco_gris.jpg"
  },
  {
    "nombre": "New Balance crema y blanco",
    "imagen": "new_balance_crema_blanco.jpg"
  },
  {
    "nombre": "Tenis chunky color crema",
    "imagen": "tenis_chunky_crema.jpg"
  },
  {
    "nombre": "Tenis deportivos blanco y menta",
    "imagen": "tenis_deportivos_blanco_menta.jpg"
  },
  {
    "nombre": "Tenis deportivos blanco y pastel",
    "imagen": "tenis_deportivos_blanco_pastel.jpg"
  }
];

const zapatosHombre = [
  {
    "nombre": "ADIDAS SAMBA DAMA Y CABALLERO",
    "imagen": "ADIDAS SAMBA DAMA Y CABALLERO.jpeg"
  },
  {
    "nombre": "ADIDAS SUPERSTAR BLANCAS CABALLERO",
    "imagen": "ADIDAS SUPERSTAR BLANCAS CABALLERO.jpeg"
  },
  {
    "nombre": "ADIDAS SUPERSTAR CABALLERO",
    "imagen": "ADIDAS SUPERSTAR CABALLERO.jpeg"
  },
  {
    "nombre": "ADIDAS SUPERSTAR NEGRAS CABALLERO",
    "imagen": "ADIDAS SUPERSTAR NEGRAS CABALLERO.jpeg"
  },
  {
    "nombre": "ALEXANDER MCQUEEN CABALLERO",
    "imagen": "ALEXANDER MCQUEEN CABALLERO.jpeg"
  },
  {
    "nombre": "ALEXANDER MCQUEEN CABALLERO (2)",
    "imagen": "ALEXANDER MCQUEEN CABALLERO (2).jpeg"
  },
  {
    "nombre": "JORDAN RETRO 3 CREMA CABALLERO",
    "imagen": "JORDAN RETRO 3  CREMA CABALLERO.jpeg"
  },
  {
    "nombre": "JORDAN RETRO 3 NEGRO CON GRIS CABALLERO",
    "imagen": "JORDAN RETRO 3  NEGRO CON GRIS CABALLERO.jpeg"
  },
  {
    "nombre": "JORDAN RETRO 3 VERDE CON BLANCO CABALLERO",
    "imagen": "JORDAN RETRO 3  VERDE CON BLANCO CABALLERO.jpeg"
  },
  {
    "nombre": "JORDAN RETRO 3 AZUL OSCURO CON GRIS CABALLERO",
    "imagen": "JORDAN RETRO 3 AZUL OSCURO CON GRIS CABALLERO.jpeg"
  },
  {
    "nombre": "JORDAN RETRO 3 BLANCA CON GRIS CABALLERO",
    "imagen": "JORDAN RETRO 3 BLANCA CON GRIS CABALLERO.jpeg"
  },
  {
    "nombre": "JORDAN RETRO 3 BLANCACON AZUL CABALLERO",
    "imagen": "JORDAN RETRO 3 BLANCACON AZUL CABALLERO.jpeg"
  },
  {
    "nombre": "JORDAN RETRO 3 CABALLERO",
    "imagen": "JORDAN RETRO 3 CABALLERO.jpeg"
  },
  {
    "nombre": "JORDAN RETRO 3 NEGRA CON BLANCA DAMA Y CABALLERO",
    "imagen": "JORDAN RETRO 3 NEGRA CON BLANCA DAMA Y CABALLERO.jpeg"
  },
  {
    "nombre": "JORDAN RETRO 3 TRAVIS DAMA Y CABALLERO",
    "imagen": "JORDAN RETRO 3 TRAVIS DAMA Y CABALLERO.jpeg"
  },
  {
    "nombre": "LECOQ SPORTIF CABALLERO",
    "imagen": "LECOQ SPORTIF CABALLERO.jpeg"
  },
  {
    "nombre": "LECOQ SPORTIF CABALLERO (2)",
    "imagen": "LECOQ SPORTIF CABALLERO (2).jpeg"
  },
  {
    "nombre": "LOUIS VUITTON TRAINER CABALLERO",
    "imagen": "LOUIS VUITTON TRAINER CABALLERO.jpeg"
  },
  {
    "nombre": "LOUIS VUITTON TRAINER CABALLERO (2)",
    "imagen": "LOUIS VUITTON TRAINER CABALLERO (2).jpeg"
  },
  {
    "nombre": "LOUIS VUITTON TRAINER CABALLERO (3)",
    "imagen": "LOUIS VUITTON TRAINER CABALLERO (3).jpeg"
  },
  {
    "nombre": "NEW BALANCE 574 BLANCOS CABALLERO",
    "imagen": "NEW BALANCE 574  BLANCOS CABALLERO.jpeg"
  },
  {
    "nombre": "NEW BALANCE 574 DAMA Y CABALLERO",
    "imagen": "NEW BALANCE 574 DAMA Y CABALLERO.jpeg"
  },
  {
    "nombre": "NIKE TN PLUS CABALLERO",
    "imagen": "NIKE TN PLUS CABALLERO.jpeg"
  },
  {
    "nombre": "NIKE ZOOM X CABALLERO",
    "imagen": "NIKE ZOOM X CABALLERO.jpeg"
  },
  {
    "nombre": "NIKE ZOOM X CABALLERO (2)",
    "imagen": "NIKE ZOOM X CABALLERO (2).jpeg"
  },
  {
    "nombre": "NIKE ZOOM X CABALLERO (3)",
    "imagen": "NIKE ZOOM X CABALLERO (3).jpeg"
  },
  {
    "nombre": "NIKE ZOOM X CABALLERO (4)",
    "imagen": "NIKE ZOOM X CABALLERO (4).jpeg"
  },
  {
    "nombre": "NIKE ZOOM X CABALLERO (5)",
    "imagen": "NIKE ZOOM X CABALLERO (5).jpeg"
  },
  {
    "nombre": "NIKE ZOOM X CABALLERO (6)",
    "imagen": "NIKE ZOOM X CABALLERO (6).jpeg"
  },
  {
    "nombre": "NIKE ZOOM X CABALLERO (7)",
    "imagen": "NIKE ZOOM X CABALLERO (7).jpeg"
  },
  {
    "nombre": "NIKE ZOOM X CABALLERO (8)",
    "imagen": "NIKE ZOOM X CABALLERO (8).jpeg"
  },
  {
    "nombre": "NIKE ZOOM X CABALLERO (9)",
    "imagen": "NIKE ZOOM X CABALLERO (9).jpeg"
  },
  {
    "nombre": "PUMA 180 CABALLERO",
    "imagen": "PUMA 180 CABALLERO.jpeg"
  }
];

function crearTarjeta(zapato) {
  const tarjeta = document.createElement("article");
  tarjeta.className = "product-card";

  const imagenContenedor = document.createElement("div");
  imagenContenedor.className = "product-image";

  const imagen = document.createElement("img");
  imagen.src = "imagenes/" + zapato.imagen;
  imagen.alt = zapato.nombre;
  imagen.loading = "lazy";
  imagen.onerror = () => {
    imagen.alt = "No se pudo cargar: " + zapato.nombre;
    imagenContenedor.classList.add("image-error");
    imagenContenedor.textContent = "Imagen no disponible";
  };
  imagenContenedor.appendChild(imagen);

  const mensaje = encodeURIComponent(
    `Hola, estoy interesado en ${zapato.nombre} de ${PRECIO} COP.`
  );
  const enlaceWhatsApp = `https://wa.me/${NUMERO_WHATSAPP}?text=${mensaje}`;

  const info = document.createElement("div");
  info.className = "product-info";
  info.innerHTML = `
    <p class="product-category">URBAN SHOES</p>
    <h3></h3>
    <p class="description">${zapato.descripcion || "Calzado urbano con estilo, comodidad y diseño."}</p>
    <p class="price">${PRECIO} <span>COP</span></p>
    <div class="btn-container">
      <a class="buy-btn" href="${enlaceWhatsApp}" target="_blank" rel="noopener noreferrer">Comprar</a>
      <a class="whatsapp-btn" href="${enlaceWhatsApp}" target="_blank" rel="noopener noreferrer">Pedir por WhatsApp</a>
    </div>
  `;
  info.querySelector("h3").textContent = zapato.nombre;

  tarjeta.append(imagenContenedor, info);
  return tarjeta;
}

function mostrarProductos(lista, idContenedor) {
  const contenedor = document.getElementById(idContenedor);
  if (!contenedor) return;

  lista.forEach(zapato => contenedor.appendChild(crearTarjeta(zapato)));
}

mostrarProductos(zapatosDama, "productos-dama");
mostrarProductos(zapatosHombre, "productos-hombre");
