import { Medicamento } from './Medicamento.js';
import { Inventario } from './Inventario.js';
import { Venta } from './Venta.js';
import { Reportes } from './Reportes.js';

// Crear medicamentos
const paracetamol = new Medicamento(1, 'Paracetamol', 100, 50);
const ibuprofeno = new Medicamento(2, 'Ibuprofeno', 150, 10);
const aspirina = new Medicamento(3, 'Aspirina', 200, 5);

// Crear inventario y agregar medicamentos
const inventario = new Inventario();
inventario.agregarMedicamento(paracetamol);
inventario.agregarMedicamento(ibuprofeno);
inventario.agregarMedicamento(aspirina);

console.log("✅ Inventario inicial:");
inventario.mostrarInventario();

// Registrar una venta
const venta1 = new Venta(aspirina, 2);
venta1.registrarVenta();

console.log("\n📦 Inventario actualizado:");
inventario.mostrarInventario();

const venta2 = new Venta(aspirina, 10); // Intentar venta con stock insuficiente
venta2.registrarVenta();

console.log("\n⚠️ Medicamentos con bajo stock:");
Reportes.mostrarMedicamentosBajoStock(inventario, 10);

console.log("\n💰 Total de ventas:");
Reportes.mostrarVentasTotales([venta1, venta2]);
