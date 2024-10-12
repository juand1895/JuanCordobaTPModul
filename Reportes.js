export class Reportes {
    static mostrarMedicamentosBajoStock(inventario, limite) {
      const bajoStock = inventario.medicamentos.filter(m => m.stock <= limite);
      bajoStock.forEach(m => m.mostrarDetalles());
    }
  
    static mostrarVentasTotales(ventas) {
      const totalVentas = ventas.reduce((acum, venta) => acum + venta.total, 0);
      console.log(`Total de ventas realizadas: $${totalVentas}`);
    }
  }
  