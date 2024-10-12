export class Inventario {
    constructor() {
      this.medicamentos = [];
    }
  
    agregarMedicamento(medicamento) {
      this.medicamentos.push(medicamento);
    }
  
    buscarMedicamento(id) {
      return this.medicamentos.find(m => m.id === id);
    }
  
    mostrarInventario() {
      console.log("Inventario de Medicamentos:");
      this.medicamentos.forEach(m => m.mostrarDetalles());
    }
  
    actualizarStock(id, cantidad) {
      const medicamento = this.buscarMedicamento(id);
      if (medicamento) medicamento.stock = cantidad;
    }
  }
  