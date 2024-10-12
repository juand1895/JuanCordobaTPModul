export class Venta {
    constructor(medicamento, cantidad) {
      this.medicamento = medicamento;
      this.cantidad = cantidad;
      this.total = this.medicamento.precio * this.cantidad;
    }
  
    registrarVenta() {
      if (this.medicamento.stock >= this.cantidad) {
        this.medicamento.stock -= this.cantidad;
        console.log(`Venta registrada: ${this.cantidad} unidades de ${this.medicamento.nombre}. Total: $${this.total}`);
      } else {
        console.log(`Stock insuficiente para ${this.medicamento.nombre}.`);
      }
    }
  }
  