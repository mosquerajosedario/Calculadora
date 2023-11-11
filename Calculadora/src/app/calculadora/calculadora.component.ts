import { Component } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent {
  valorAnterior: number = 0;
  operacion: string = '';
  displayText: string = '0';
  operaciones: string[] = ["+", "-", "×", "÷"];

  onButtonClick(valor: string): void {
    let texto = this.displayText;

    switch (valor) {
      case 'AC':
        this.displayText = '0';
        this.valorAnterior = 0;
        this.operacion = '';
        break;
      case '+/-':
        this.displayText = this.cambiarSigno(parseFloat(texto)).toString();
        break;
      case '%':
        this.displayText = this.porciento(parseFloat(texto)).toString();
        break;
      case '.':
        if (texto.indexOf(valor) === -1) {
          texto = texto + valor;
          this.displayText = texto;
        }
        break;
      case '=':
        switch (this.operacion) {
          case '+':
            this.displayText = this.sumar(this.valorAnterior, parseFloat(texto)).toString();
            break;
          case '-':
            this.displayText = this.restar(this.valorAnterior, parseFloat(texto)).toString();
            break;
          case '×':
            this.displayText = this.multiplicar(this.valorAnterior, parseFloat(texto)).toString();
            break;
          case '÷':
            this.displayText = this.dividir(this.valorAnterior, parseFloat(texto)).toString();
            break;
        }
        break;
      default:
        if (this.operaciones.find((e) => e == valor)) {
          this.valorAnterior = parseFloat(texto);
          this.operacion = valor;
          this.displayText = "0";
        } else {
          if (texto !== '0') {
            texto = texto + valor;
          } else {
            texto = valor;
          }
          this.displayText = texto;
        }
        break;
    }
  }

  sumar(a: number, b: number): number {
    return a + b;
  }

  restar(a: number, b: number): number {
    return a - b;
  }

  multiplicar(a: number, b: number): number {
    return a * b;
  }

  dividir(a: number, b: number): number {
    return a / b;
  }

  porciento(a: number): number {
    return a / 100;
  }

  cambiarSigno(a: number): number {
    return -a;
  }
}
