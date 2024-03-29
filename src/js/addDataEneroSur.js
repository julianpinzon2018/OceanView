import {
  enero_sur_P_1_D_1,
  //   enero_sur_P_1_D_2,
  enero_sur_P_1_D_3,
  enero_sur_P_2_D_1,
  enero_sur_P_2_D_2,
  enero_sur_P_2_D_3,
  enero_sur_P_3_D_1,
  enero_sur_P_3_D_2,
  enero_sur_P_3_D_3,
  enero_sur_P_4_D_1,
  enero_sur_P_4_D_2,
  enero_sur_P_4_D_3,
  enero_sur_P_5_D_1,
  enero_sur_P_5_D_2,
  enero_sur_P_5_D_3,
  enero_sur_P_6_D_1,
  enero_sur_P_6_D_2,
  enero_sur_P_6_D_3,
} from "./meses-estado/1-enero-sur.js";

// primer piso
const enero_sur_p_1_d_1 = document.querySelector(".enero_sur_P_1_D_1");
enero_sur_p_1_d_1.classList.add(enero_sur_P_1_D_1.status);
const enero_sur_p_1_d_1Div =
  enero_sur_p_1_d_1.querySelector(".container-status");

if (enero_sur_P_1_D_1.status !== "Disponible") {
  const status_enero = document.createElement("p");
  status_enero.classList.add("status_depart");
  status_enero.innerHTML = enero_sur_P_1_D_1.status;

  const unidad_enero = document.createElement("p");
  unidad_enero.classList.add("unidad_depart");
  unidad_enero.innerHTML = "Unidad: " + enero_sur_P_1_D_1.unidad;

  enero_sur_p_1_d_1Div.appendChild(status_enero);
  enero_sur_p_1_d_1Div.appendChild(unidad_enero);
} else {
  const status_enero = document.createElement("p");
  status_enero.classList.add("status_depart");
  status_enero.innerHTML = enero_sur_P_1_D_1.status;

  const unidad_enero = document.createElement("p");
  unidad_enero.classList.add("unidad_depart");
  unidad_enero.innerHTML = "Unidad: " + enero_sur_P_1_D_1.unidad;

  const precio_enero = document.createElement("p");
  precio_enero.classList.add("precio_depart");
  precio_enero.innerHTML = "Precio lista: $" + enero_sur_P_1_D_1.precio;
  enero_sur_p_1_d_1Div.appendChild(status_enero);
  enero_sur_p_1_d_1Div.appendChild(unidad_enero);
  enero_sur_p_1_d_1Div.appendChild(precio_enero);
}

// const enero_sur_p_1_d_2 = document.querySelector(".enero_sur_P_1_D_2");
// enero_sur_p_1_d_2.classList.add(enero_sur_P_1_D_2);
// const enero_sur_p_1_d_2Div = enero_sur_p_1_d_2.querySelector("div");
// enero_sur_p_1_d_2Div.querySelector("p").innerHTML = enero_sur_P_1_D_2;

const enero_sur_p_1_d_3 = document.querySelector(".enero_sur_P_1_D_3");
enero_sur_p_1_d_3.classList.add(enero_sur_P_1_D_3.status);
const enero_sur_p_1_d_3Div =
  enero_sur_p_1_d_3.querySelector(".container-status");

if (enero_sur_P_1_D_3.status !== "Disponible") {
  const status_enero = document.createElement("p");
  status_enero.classList.add("status_depart");
  status_enero.innerHTML = enero_sur_P_1_D_3.status;

  const unidad_enero = document.createElement("p");
  unidad_enero.classList.add("unidad_depart");
  unidad_enero.innerHTML = "Unidad: " + enero_sur_P_1_D_3.unidad;

  enero_sur_p_1_d_3Div.appendChild(status_enero);
  enero_sur_p_1_d_3Div.appendChild(unidad_enero);
} else {
  const status_enero = document.createElement("p");
  status_enero.classList.add("status_depart");
  status_enero.innerHTML = enero_sur_P_1_D_3.status;

  const unidad_enero = document.createElement("p");
  unidad_enero.classList.add("unidad_depart");
  unidad_enero.innerHTML = "Unidad: " + enero_sur_P_1_D_3.unidad;

  const precio_enero = document.createElement("p");
  precio_enero.classList.add("precio_depart");
  precio_enero.innerHTML = "Precio lista: $" + enero_sur_P_1_D_3.precio;
  enero_sur_p_1_d_3Div.appendChild(status_enero);
  enero_sur_p_1_d_3Div.appendChild(unidad_enero);
  enero_sur_p_1_d_3Div.appendChild(precio_enero);
}

// segundo piso
const enero_sur_p_2_d_1 = document.querySelector(".enero_sur_P_2_D_1");
enero_sur_p_2_d_1.classList.add(enero_sur_P_2_D_1.status);
const enero_sur_p_2_d_1Div =
  enero_sur_p_2_d_1.querySelector(".container-status");

if (enero_sur_P_2_D_1.status !== "Disponible") {
  const status_enero = document.createElement("p");
  status_enero.classList.add("status_depart");
  status_enero.innerHTML = enero_sur_P_2_D_1.status;

  const unidad_enero = document.createElement("p");
  unidad_enero.classList.add("unidad_depart");
  unidad_enero.innerHTML = "Unidad: " + enero_sur_P_2_D_1.unidad;

  enero_sur_p_2_d_1Div.appendChild(status_enero);
  enero_sur_p_2_d_1Div.appendChild(unidad_enero);
} else {
  const status_enero = document.createElement("p");
  status_enero.classList.add("status_depart");
  status_enero.innerHTML = enero_sur_P_2_D_1.status;

  const unidad_enero = document.createElement("p");
  unidad_enero.classList.add("unidad_depart");
  unidad_enero.innerHTML = "Unidad: " + enero_sur_P_2_D_1.unidad;

  const precio_enero = document.createElement("p");
  precio_enero.classList.add("precio_depart");
  precio_enero.innerHTML = "Precio lista: $" + enero_sur_P_2_D_1.precio;
  enero_sur_p_2_d_1Div.appendChild(status_enero);
  enero_sur_p_2_d_1Div.appendChild(unidad_enero);
  enero_sur_p_2_d_1Div.appendChild(precio_enero);
}

const enero_sur_p_2_d_2 = document.querySelector(".enero_sur_P_2_D_2");
enero_sur_p_2_d_2.classList.add(enero_sur_P_2_D_2.status);
const enero_sur_p_2_d_2Div =
  enero_sur_p_2_d_2.querySelector(".container-status");

if (enero_sur_P_2_D_2.status !== "Disponible") {
  const status_enero = document.createElement("p");
  status_enero.classList.add("status_depart");
  status_enero.innerHTML = enero_sur_P_2_D_2.status;

  const unidad_enero = document.createElement("p");
  unidad_enero.classList.add("unidad_depart");
  unidad_enero.innerHTML = "Unidad: " + enero_sur_P_2_D_2.unidad;

  enero_sur_p_2_d_2Div.appendChild(status_enero);
  enero_sur_p_2_d_2Div.appendChild(unidad_enero);
} else {
  const status_enero = document.createElement("p");
  status_enero.classList.add("status_depart");
  status_enero.innerHTML = enero_sur_P_2_D_2.status;

  const unidad_enero = document.createElement("p");
  unidad_enero.classList.add("unidad_depart");
  unidad_enero.innerHTML = "Unidad: " + enero_sur_P_2_D_2.unidad;

  const precio_enero = document.createElement("p");
  precio_enero.classList.add("precio_depart");
  precio_enero.innerHTML = "Precio lista: $" + enero_sur_P_2_D_2.precio;
  enero_sur_p_2_d_2Div.appendChild(status_enero);
  enero_sur_p_2_d_2Div.appendChild(unidad_enero);
  enero_sur_p_2_d_2Div.appendChild(precio_enero);
}

const enero_sur_p_2_d_3 = document.querySelector(".enero_sur_P_2_D_3");
enero_sur_p_2_d_3.classList.add(enero_sur_P_2_D_3.status);
const enero_sur_p_2_d_3Div =
  enero_sur_p_2_d_3.querySelector(".container-status");

if (enero_sur_P_2_D_3.status !== "Disponible") {
  const status_enero = document.createElement("p");
  status_enero.classList.add("status_depart");
  status_enero.innerHTML = enero_sur_P_2_D_3.status;

  const unidad_enero = document.createElement("p");
  unidad_enero.classList.add("unidad_depart");
  unidad_enero.innerHTML = "Unidad: " + enero_sur_P_2_D_3.unidad;

  enero_sur_p_2_d_3Div.appendChild(status_enero);
  enero_sur_p_2_d_3Div.appendChild(unidad_enero);
} else {
  const status_enero = document.createElement("p");
  status_enero.classList.add("status_depart");
  status_enero.innerHTML = enero_sur_P_2_D_3.status;

  const unidad_enero = document.createElement("p");
  unidad_enero.classList.add("unidad_depart");
  unidad_enero.innerHTML = "Unidad: " + enero_sur_P_2_D_3.unidad;

  const precio_enero = document.createElement("p");
  precio_enero.classList.add("precio_depart");
  precio_enero.innerHTML = "Precio lista: $" + enero_sur_P_2_D_3.precio;
  enero_sur_p_2_d_3Div.appendChild(status_enero);
  enero_sur_p_2_d_3Div.appendChild(unidad_enero);
  enero_sur_p_2_d_3Div.appendChild(precio_enero);
}

// tercer piso
const enero_sur_p_3_d_1 = document.querySelector(".enero_sur_P_3_D_1");
enero_sur_p_3_d_1.classList.add(enero_sur_P_3_D_1.status);
const enero_sur_p_3_d_1Div =
  enero_sur_p_3_d_1.querySelector(".container-status");

if (enero_sur_P_3_D_1.status !== "Disponible") {
  const status_enero = document.createElement("p");
  status_enero.classList.add("status_depart");
  status_enero.innerHTML = enero_sur_P_3_D_1.status;

  const unidad_enero = document.createElement("p");
  unidad_enero.classList.add("unidad_depart");
  unidad_enero.innerHTML = "Unidad: " + enero_sur_P_3_D_1.unidad;

  enero_sur_p_3_d_1Div.appendChild(status_enero);
  enero_sur_p_3_d_1Div.appendChild(unidad_enero);
} else {
  const status_enero = document.createElement("p");
  status_enero.classList.add("status_depart");
  status_enero.innerHTML = enero_sur_P_3_D_1.status;

  const unidad_enero = document.createElement("p");
  unidad_enero.classList.add("unidad_depart");
  unidad_enero.innerHTML = "Unidad: " + enero_sur_P_3_D_1.unidad;

  const precio_enero = document.createElement("p");
  precio_enero.classList.add("precio_depart");
  precio_enero.innerHTML = "Precio lista: $" + enero_sur_P_3_D_1.precio;
  enero_sur_p_3_d_1Div.appendChild(status_enero);
  enero_sur_p_3_d_1Div.appendChild(unidad_enero);
  enero_sur_p_3_d_1Div.appendChild(precio_enero);
}

const enero_sur_p_3_d_2 = document.querySelector(".enero_sur_P_3_D_2");
enero_sur_p_3_d_2.classList.add(enero_sur_P_3_D_2.status);
const enero_sur_p_3_d_2Div =
  enero_sur_p_3_d_2.querySelector(".container-status");

if (enero_sur_P_3_D_2.status !== "Disponible") {
  const status_enero = document.createElement("p");
  status_enero.classList.add("status_depart");
  status_enero.innerHTML = enero_sur_P_3_D_2.status;

  const unidad_enero = document.createElement("p");
  unidad_enero.classList.add("unidad_depart");
  unidad_enero.innerHTML = "Unidad: " + enero_sur_P_3_D_2.unidad;

  enero_sur_p_3_d_2Div.appendChild(status_enero);
  enero_sur_p_3_d_2Div.appendChild(unidad_enero);
} else {
  const status_enero = document.createElement("p");
  status_enero.classList.add("status_depart");
  status_enero.innerHTML = enero_sur_P_3_D_2.status;

  const unidad_enero = document.createElement("p");
  unidad_enero.classList.add("unidad_depart");
  unidad_enero.innerHTML = "Unidad: " + enero_sur_P_3_D_2.unidad;

  const precio_enero = document.createElement("p");
  precio_enero.classList.add("precio_depart");
  precio_enero.innerHTML = "Precio lista: $" + enero_sur_P_3_D_2.precio;
  enero_sur_p_3_d_2Div.appendChild(status_enero);
  enero_sur_p_3_d_2Div.appendChild(unidad_enero);
  enero_sur_p_3_d_2Div.appendChild(precio_enero);
}

const enero_sur_p_3_d_3 = document.querySelector(".enero_sur_P_3_D_3");
enero_sur_p_3_d_3.classList.add(enero_sur_P_3_D_3.status);
const enero_sur_p_3_d_3Div =
  enero_sur_p_3_d_3.querySelector(".container-status");

if (enero_sur_P_3_D_3.status !== "Disponible") {
  const status_enero = document.createElement("p");
  status_enero.classList.add("status_depart");
  status_enero.innerHTML = enero_sur_P_3_D_3.status;

  const unidad_enero = document.createElement("p");
  unidad_enero.classList.add("unidad_depart");
  unidad_enero.innerHTML = "Unidad: " + enero_sur_P_3_D_3.unidad;

  enero_sur_p_3_d_3Div.appendChild(status_enero);
  enero_sur_p_3_d_3Div.appendChild(unidad_enero);
} else {
  const status_enero = document.createElement("p");
  status_enero.classList.add("status_depart");
  status_enero.innerHTML = enero_sur_P_3_D_3.status;

  const unidad_enero = document.createElement("p");
  unidad_enero.classList.add("unidad_depart");
  unidad_enero.innerHTML = "Unidad: " + enero_sur_P_3_D_3.unidad;

  const precio_enero = document.createElement("p");
  precio_enero.classList.add("precio_depart");
  precio_enero.innerHTML = "Precio lista: $" + enero_sur_P_3_D_3.precio;
  enero_sur_p_3_d_3Div.appendChild(status_enero);
  enero_sur_p_3_d_3Div.appendChild(unidad_enero);
  enero_sur_p_3_d_3Div.appendChild(precio_enero);
}

// cuarto piso
const enero_sur_p_4_d_1 = document.querySelector(".enero_sur_P_4_D_1");
enero_sur_p_4_d_1.classList.add(enero_sur_P_4_D_1.status);
const enero_sur_p_4_d_1Div =
  enero_sur_p_4_d_1.querySelector(".container-status");

if (enero_sur_P_4_D_1.status !== "Disponible") {
  const status_enero = document.createElement("p");
  status_enero.classList.add("status_depart");
  status_enero.innerHTML = enero_sur_P_4_D_1.status;

  const unidad_enero = document.createElement("p");
  unidad_enero.classList.add("unidad_depart");
  unidad_enero.innerHTML = "Unidad: " + enero_sur_P_4_D_1.unidad;

  enero_sur_p_4_d_1Div.appendChild(status_enero);
  enero_sur_p_4_d_1Div.appendChild(unidad_enero);
} else {
  const status_enero = document.createElement("p");
  status_enero.classList.add("status_depart");
  status_enero.innerHTML = enero_sur_P_4_D_1.status;

  const unidad_enero = document.createElement("p");
  unidad_enero.classList.add("unidad_depart");
  unidad_enero.innerHTML = "Unidad: " + enero_sur_P_4_D_1.unidad;

  const precio_enero = document.createElement("p");
  precio_enero.classList.add("precio_depart");
  precio_enero.innerHTML = "Precio lista: $" + enero_sur_P_4_D_1.precio;
  enero_sur_p_4_d_1Div.appendChild(status_enero);
  enero_sur_p_4_d_1Div.appendChild(unidad_enero);
  enero_sur_p_4_d_1Div.appendChild(precio_enero);
}

const enero_sur_p_4_d_2 = document.querySelector(".enero_sur_P_4_D_2");
enero_sur_p_4_d_2.classList.add(enero_sur_P_4_D_2.status);
const enero_sur_p_4_d_2Div =
  enero_sur_p_4_d_2.querySelector(".container-status");

if (enero_sur_P_4_D_2.status !== "Disponible") {
  const status_enero = document.createElement("p");
  status_enero.classList.add("status_depart");
  status_enero.innerHTML = enero_sur_P_4_D_2.status;

  const unidad_enero = document.createElement("p");
  unidad_enero.classList.add("unidad_depart");
  unidad_enero.innerHTML = "Unidad: " + enero_sur_P_4_D_2.unidad;

  enero_sur_p_4_d_2Div.appendChild(status_enero);
  enero_sur_p_4_d_2Div.appendChild(unidad_enero);
} else {
  const status_enero = document.createElement("p");
  status_enero.classList.add("status_depart");
  status_enero.innerHTML = enero_sur_P_4_D_2.status;

  const unidad_enero = document.createElement("p");
  unidad_enero.classList.add("unidad_depart");
  unidad_enero.innerHTML = "Unidad: " + enero_sur_P_4_D_2.unidad;

  const precio_enero = document.createElement("p");
  precio_enero.classList.add("precio_depart");
  precio_enero.innerHTML = "Precio lista: $" + enero_sur_P_4_D_2.precio;
  enero_sur_p_4_d_2Div.appendChild(status_enero);
  enero_sur_p_4_d_2Div.appendChild(unidad_enero);
  enero_sur_p_4_d_2Div.appendChild(precio_enero);
}

const enero_sur_p_4_d_3 = document.querySelector(".enero_sur_P_4_D_3");
enero_sur_p_4_d_3.classList.add(enero_sur_P_4_D_3.status);
const enero_sur_p_4_d_3Div =
  enero_sur_p_4_d_3.querySelector(".container-status");

if (enero_sur_P_4_D_3.status !== "Disponible") {
  const status_enero = document.createElement("p");
  status_enero.classList.add("status_depart");
  status_enero.innerHTML = enero_sur_P_4_D_3.status;

  const unidad_enero = document.createElement("p");
  unidad_enero.classList.add("unidad_depart");
  unidad_enero.innerHTML = "Unidad: " + enero_sur_P_4_D_3.unidad;

  enero_sur_p_4_d_3Div.appendChild(status_enero);
  enero_sur_p_4_d_3Div.appendChild(unidad_enero);
} else {
  const status_enero = document.createElement("p");
  status_enero.classList.add("status_depart");
  status_enero.innerHTML = enero_sur_P_4_D_3.status;

  const unidad_enero = document.createElement("p");
  unidad_enero.classList.add("unidad_depart");
  unidad_enero.innerHTML = "Unidad: " + enero_sur_P_4_D_3.unidad;

  const precio_enero = document.createElement("p");
  precio_enero.classList.add("precio_depart");
  precio_enero.innerHTML = "Precio lista: $" + enero_sur_P_4_D_3.precio;
  enero_sur_p_4_d_3Div.appendChild(status_enero);
  enero_sur_p_4_d_3Div.appendChild(unidad_enero);
  enero_sur_p_4_d_3Div.appendChild(precio_enero);
}

// quinto piso
const enero_sur_p_5_d_1 = document.querySelector(".enero_sur_P_5_D_1");
enero_sur_p_5_d_1.classList.add(enero_sur_P_5_D_1.status);
const enero_sur_p_5_d_1Div =
  enero_sur_p_5_d_1.querySelector(".container-status");

if (enero_sur_P_5_D_1.status !== "Disponible") {
  const status_enero = document.createElement("p");
  status_enero.classList.add("status_depart");
  status_enero.innerHTML = enero_sur_P_5_D_1.status;

  const unidad_enero = document.createElement("p");
  unidad_enero.classList.add("unidad_depart");
  unidad_enero.innerHTML = "Unidad: " + enero_sur_P_5_D_1.unidad;

  enero_sur_p_5_d_1Div.appendChild(status_enero);
  enero_sur_p_5_d_1Div.appendChild(unidad_enero);
} else {
  const status_enero = document.createElement("p");
  status_enero.classList.add("status_depart");
  status_enero.innerHTML = enero_sur_P_5_D_1.status;

  const unidad_enero = document.createElement("p");
  unidad_enero.classList.add("unidad_depart");
  unidad_enero.innerHTML = "Unidad: " + enero_sur_P_5_D_1.unidad;

  const precio_enero = document.createElement("p");
  precio_enero.classList.add("precio_depart");
  precio_enero.innerHTML = "Precio lista: $" + enero_sur_P_5_D_1.precio;
  enero_sur_p_5_d_1Div.appendChild(status_enero);
  enero_sur_p_5_d_1Div.appendChild(unidad_enero);
  enero_sur_p_5_d_1Div.appendChild(precio_enero);
}

const enero_sur_p_5_d_2 = document.querySelector(".enero_sur_P_5_D_2");
enero_sur_p_5_d_2.classList.add(enero_sur_P_5_D_2.status);
const enero_sur_p_5_d_2Div =
  enero_sur_p_5_d_2.querySelector(".container-status");

if (enero_sur_P_5_D_2.status !== "Disponible") {
  const status_enero = document.createElement("p");
  status_enero.classList.add("status_depart");
  status_enero.innerHTML = enero_sur_P_5_D_2.status;

  const unidad_enero = document.createElement("p");
  unidad_enero.classList.add("unidad_depart");
  unidad_enero.innerHTML = "Unidad: " + enero_sur_P_5_D_2.unidad;

  enero_sur_p_5_d_2Div.appendChild(status_enero);
  enero_sur_p_5_d_2Div.appendChild(unidad_enero);
} else {
  const status_enero = document.createElement("p");
  status_enero.classList.add("status_depart");
  status_enero.innerHTML = enero_sur_P_5_D_2.status;

  const unidad_enero = document.createElement("p");
  unidad_enero.classList.add("unidad_depart");
  unidad_enero.innerHTML = "Unidad: " + enero_sur_P_5_D_2.unidad;

  const precio_enero = document.createElement("p");
  precio_enero.classList.add("precio_depart");
  precio_enero.innerHTML = "Precio lista: $" + enero_sur_P_5_D_2.precio;
  enero_sur_p_5_d_2Div.appendChild(status_enero);
  enero_sur_p_5_d_2Div.appendChild(unidad_enero);
  enero_sur_p_5_d_2Div.appendChild(precio_enero);
}

const enero_sur_p_5_d_3 = document.querySelector(".enero_sur_P_5_D_3");
enero_sur_p_5_d_3.classList.add(enero_sur_P_5_D_3.status);
const enero_sur_p_5_d_3Div =
  enero_sur_p_5_d_3.querySelector(".container-status");

if (enero_sur_P_5_D_3.status !== "Disponible") {
  const status_enero = document.createElement("p");
  status_enero.classList.add("status_depart");
  status_enero.innerHTML = enero_sur_P_5_D_3.status;

  const unidad_enero = document.createElement("p");
  unidad_enero.classList.add("unidad_depart");
  unidad_enero.innerHTML = "Unidad: " + enero_sur_P_5_D_3.unidad;

  enero_sur_p_5_d_3Div.appendChild(status_enero);
  enero_sur_p_5_d_3Div.appendChild(unidad_enero);
} else {
  const status_enero = document.createElement("p");
  status_enero.classList.add("status_depart");
  status_enero.innerHTML = enero_sur_P_5_D_3.status;

  const unidad_enero = document.createElement("p");
  unidad_enero.classList.add("unidad_depart");
  unidad_enero.innerHTML = "Unidad: " + enero_sur_P_5_D_3.unidad;

  const precio_enero = document.createElement("p");
  precio_enero.classList.add("precio_depart");
  precio_enero.innerHTML = "Precio lista: $" + enero_sur_P_5_D_3.precio;
  enero_sur_p_5_d_3Div.appendChild(status_enero);
  enero_sur_p_5_d_3Div.appendChild(unidad_enero);
  enero_sur_p_5_d_3Div.appendChild(precio_enero);
}

// sexto piso
const enero_sur_p_6_d_1 = document.querySelector(".enero_sur_P_6_D_1");
enero_sur_p_6_d_1.classList.add(enero_sur_P_6_D_1.status);
const enero_sur_p_6_d_1Div =
  enero_sur_p_6_d_1.querySelector(".container-status");

if (enero_sur_P_6_D_1.status !== "Disponible") {
  const status_enero = document.createElement("p");
  status_enero.classList.add("status_depart");
  status_enero.innerHTML = enero_sur_P_6_D_1.status;

  const unidad_enero = document.createElement("p");
  unidad_enero.classList.add("unidad_depart");
  unidad_enero.innerHTML = "Unidad: " + enero_sur_P_6_D_1.unidad;

  enero_sur_p_6_d_1Div.appendChild(status_enero);
  enero_sur_p_6_d_1Div.appendChild(unidad_enero);
} else {
  const status_enero = document.createElement("p");
  status_enero.classList.add("status_depart");
  status_enero.innerHTML = enero_sur_P_6_D_1.status;

  const unidad_enero = document.createElement("p");
  unidad_enero.classList.add("unidad_depart");
  unidad_enero.innerHTML = "Unidad: " + enero_sur_P_6_D_1.unidad;

  const precio_enero = document.createElement("p");
  precio_enero.classList.add("precio_depart");
  precio_enero.innerHTML = "Precio lista: $" + enero_sur_P_6_D_1.precio;
  enero_sur_p_6_d_1Div.appendChild(status_enero);
  enero_sur_p_6_d_1Div.appendChild(unidad_enero);
  enero_sur_p_6_d_1Div.appendChild(precio_enero);
}

const enero_sur_p_6_d_2 = document.querySelector(".enero_sur_P_6_D_2");
enero_sur_p_6_d_2.classList.add(enero_sur_P_6_D_2.status);
const enero_sur_p_6_d_2Div =
  enero_sur_p_6_d_2.querySelector(".container-status");

if (enero_sur_P_6_D_2.status !== "Disponible") {
  const status_enero = document.createElement("p");
  status_enero.classList.add("status_depart");
  status_enero.innerHTML = enero_sur_P_6_D_2.status;

  const unidad_enero = document.createElement("p");
  unidad_enero.classList.add("unidad_depart");
  unidad_enero.innerHTML = "Unidad: " + enero_sur_P_6_D_2.unidad;

  enero_sur_p_6_d_2Div.appendChild(status_enero);
  enero_sur_p_6_d_2Div.appendChild(unidad_enero);
} else {
  const status_enero = document.createElement("p");
  status_enero.classList.add("status_depart");
  status_enero.innerHTML = enero_sur_P_6_D_2.status;

  const unidad_enero = document.createElement("p");
  unidad_enero.classList.add("unidad_depart");
  unidad_enero.innerHTML = "Unidad: " + enero_sur_P_6_D_2.unidad;

  const precio_enero = document.createElement("p");
  precio_enero.classList.add("precio_depart");
  precio_enero.innerHTML = "Precio lista: $" + enero_sur_P_6_D_2.precio;
  enero_sur_p_6_d_2Div.appendChild(status_enero);
  enero_sur_p_6_d_2Div.appendChild(unidad_enero);
  enero_sur_p_6_d_2Div.appendChild(precio_enero);
}

const enero_sur_p_6_d_3 = document.querySelector(".enero_sur_P_6_D_3");
enero_sur_p_6_d_3.classList.add(enero_sur_P_6_D_3.status);
const enero_sur_p_6_d_3Div =
  enero_sur_p_6_d_3.querySelector(".container-status");

if (enero_sur_P_6_D_3.status !== "Disponible") {
  const status_enero = document.createElement("p");
  status_enero.classList.add("status_depart");
  status_enero.innerHTML = enero_sur_P_6_D_3.status;

  const unidad_enero = document.createElement("p");
  unidad_enero.classList.add("unidad_depart");
  unidad_enero.innerHTML = "Unidad: " + enero_sur_P_6_D_3.unidad;

  enero_sur_p_6_d_3Div.appendChild(status_enero);
  enero_sur_p_6_d_3Div.appendChild(unidad_enero);
} else {
  const status_enero = document.createElement("p");
  status_enero.classList.add("status_depart");
  status_enero.innerHTML = enero_sur_P_6_D_3.status;

  const unidad_enero = document.createElement("p");
  unidad_enero.classList.add("unidad_depart");
  unidad_enero.innerHTML = "Unidad: " + enero_sur_P_6_D_3.unidad;

  const precio_enero = document.createElement("p");
  precio_enero.classList.add("precio_depart");
  precio_enero.innerHTML = "Precio lista: $" + enero_sur_P_6_D_3.precio;
  enero_sur_p_6_d_3Div.appendChild(status_enero);
  enero_sur_p_6_d_3Div.appendChild(unidad_enero);
  enero_sur_p_6_d_3Div.appendChild(precio_enero);
}
