function cargarNombre() {
  var nombre = localStorage.getItem("nombre");
  var el = document.getElementById("nombre-nav");
  if (nombre && el) el.textContent = nombre;
}
 
function editarNombre() {
  var nuevo = prompt("Escribe tu nombre:");
  if (nuevo) {
    localStorage.setItem("nombre", nuevo);
    document.getElementById("nombre-usuario").textContent = nuevo;
  }
}
 
function mostrar() {
  document.getElementById("resultado").style.display = "block";
}
 
// 2.10 Agua
function calcular_2_10() {
  var metros = parseFloat(document.getElementById("metros").value);
  var precio = parseFloat(document.getElementById("precio").value);
  if (isNaN(metros) || isNaN(precio)) { alert("Ingresa valores válidos"); return; }
  var total = metros * precio;
  document.getElementById("r-metros").textContent = metros;
  document.getElementById("r-precio").textContent = "$" + precio.toFixed(2);
  document.getElementById("r-total").textContent = total.toFixed(2);
  mostrar();
}
 
// 2.11 Luz
function calcular_2_11() {
  var kw = parseFloat(document.getElementById("kw").value);
  var precio = parseFloat(document.getElementById("precio").value);
  if (isNaN(kw) || isNaN(precio)) { alert("Ingresa valores válidos"); return; }
  var total = kw * precio;
  document.getElementById("r-kw").textContent = kw;
  document.getElementById("r-precio").textContent = "$" + precio.toFixed(2);
  document.getElementById("r-total").textContent = total.toFixed(2);
  mostrar();
}
 
// 2.12 Descuento + IVA
function calcular_2_12() {
  var precio = parseFloat(document.getElementById("precio").value);
  if (isNaN(precio)) { alert("Ingresa un precio válido"); return; }
  var descuento = precio * 0.20;
  var conDesc = precio - descuento;
  var iva = conDesc * 0.15;
  var total = conDesc + iva;
  document.getElementById("r-original").textContent = "$" + precio.toFixed(2);
  document.getElementById("r-descuento").textContent = "-$" + descuento.toFixed(2);
  document.getElementById("r-con-desc").textContent = "$" + conDesc.toFixed(2);
  document.getElementById("r-iva").textContent = "+$" + iva.toFixed(2);
  document.getElementById("r-total").textContent = total.toFixed(2);
  mostrar();
}
 
// 2.13 Ahorro
function calcular_2_13() {
  var sueldo = parseFloat(document.getElementById("sueldo").value);
  if (isNaN(sueldo)) { alert("Ingresa un sueldo válido"); return; }
  var semanal = sueldo / 4;
  var ahorro_semana = semanal * 0.15;
  var ahorro_mes = ahorro_semana * 4;
  var ahorro_anual = ahorro_mes * 12;
  document.getElementById("r-sueldo").textContent = "$" + sueldo.toFixed(2);
  document.getElementById("r-semana").textContent = "$" + ahorro_semana.toFixed(2);
  document.getElementById("r-mes").textContent = "$" + ahorro_mes.toFixed(2);
  document.getElementById("r-anual").textContent = ahorro_anual.toFixed(2);
  mostrar();
}
 
// 2.14 Viáticos
function calcular_2_14() {
  var dias = parseInt(document.getElementById("dias").value);
  var hotel = parseFloat(document.getElementById("hotel").value);
  var comida = parseFloat(document.getElementById("comida").value);
  if (isNaN(dias) || isNaN(hotel) || isNaN(comida)) { alert("Ingresa valores válidos"); return; }
  var t_hotel = hotel * dias;
  var t_comida = comida * dias;
  var t_otros = 100 * dias;
  var total = t_hotel + t_comida + t_otros;
  document.getElementById("r-dias").textContent = dias;
  document.getElementById("r-hotel").textContent = "$" + t_hotel.toFixed(2);
  document.getElementById("r-comida").textContent = "$" + t_comida.toFixed(2);
  document.getElementById("r-otros").textContent = "$" + t_otros.toFixed(2);
  document.getElementById("r-total").textContent = total.toFixed(2);
  mostrar();
}
 
// 2.15 Potencia
function calcular_2_15() {
  var R = parseFloat(document.getElementById("resistencia").value);
  var I = parseFloat(document.getElementById("corriente").value);
  if (isNaN(R) || isNaN(I)) { alert("Ingresa valores válidos"); return; }
  var V = R * I;
  var P = V * I;
  document.getElementById("r-r").textContent = R.toFixed(2);
  document.getElementById("r-i").textContent = I.toFixed(2);
  document.getElementById("r-v").textContent = V.toFixed(2);
  document.getElementById("r-p").textContent = P.toFixed(2);
  mostrar();
}
 
// 2.16 Cuadrado
function calcular_2_16() {
  var lado = parseFloat(document.getElementById("lado").value);
  if (isNaN(lado)) { alert("Ingresa un valor válido"); return; }
  var area = lado * lado;
  document.getElementById("r-lado").textContent = lado.toFixed(2);
  document.getElementById("r-area").textContent = area.toFixed(2);
  mostrar();
}
 
// 2.17 Promedio
function calcular_2_17() {
  var e1 = parseFloat(document.getElementById("e1").value);
  var e2 = parseFloat(document.getElementById("e2").value);
  var e3 = parseFloat(document.getElementById("e3").value);
  if (isNaN(e1) || isNaN(e2) || isNaN(e3)) { alert("Ingresa las tres calificaciones"); return; }
  var promedio = (e1 * 0.25) + (e2 * 0.25) + (e3 * 0.50);
  document.getElementById("r-e1").textContent = e1;
  document.getElementById("r-e2").textContent = e2;
  document.getElementById("r-e3").textContent = e3;
  document.getElementById("r-promedio").textContent = promedio.toFixed(2);
  mostrar();
}
 
// 2.18 Tiempo de vida
function calcular_2_18() {
  var fecha = document.getElementById("fecha").value;
  if (!fecha) { alert("Selecciona tu fecha de nacimiento"); return; }
  var nacimiento = new Date(fecha);
  var hoy = new Date();
  var dias = Math.floor((hoy - nacimiento) / 86400000);
  document.getElementById("r-meses").textContent = Math.floor(dias / 30.44).toLocaleString();
  document.getElementById("r-semanas").textContent = Math.floor(dias / 7).toLocaleString();
  document.getElementById("r-dias").textContent = dias.toLocaleString();
  document.getElementById("r-horas").textContent = (dias * 24).toLocaleString();
  mostrar();
}
 
// 2.19 Llamada
function calcular_2_19() {
  var minutos = parseFloat(document.getElementById("minutos").value);
  var costo = parseFloat(document.getElementById("costo").value);
  if (isNaN(minutos) || isNaN(costo)) { alert("Ingresa valores válidos"); return; }
  var total = minutos * costo;
  document.getElementById("r-minutos").textContent = minutos;
  document.getElementById("r-costo").textContent = "$" + costo.toFixed(2);
  document.getElementById("r-total").textContent = total.toFixed(2);
  mostrar();
}
 
// 2.20 Hotel
function calcular_2_20() {
  var huesped = document.getElementById("huesped").value;
  var noches = parseInt(document.getElementById("noches").value);
  var costo = parseFloat(document.getElementById("costo").value);
  if (!huesped || isNaN(noches) || isNaN(costo)) { alert("Llena todos los campos"); return; }
  var total = noches * costo;
  document.getElementById("r-huesped").textContent = huesped;
  document.getElementById("r-noches").textContent = noches;
  document.getElementById("r-costo").textContent = "$" + costo.toFixed(2);
  document.getElementById("r-total").textContent = total.toFixed(2);
  mostrar();
}
 