import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Minha página em Angular';
  palavra = '';
  valor1 = '';
  valor2 = '';
  
  contarLetras(): number {
    return this.palavra.replace(/\s/g, '').length;
}
  validarPalindromo(): string {
    const palavraLimpa = this.palavra.replace(/\s/g, '').toLowerCase();
    const palavraReversa = palavraLimpa.split('').reverse().join('');
      if (this.palavra == palavraReversa){
        return "é um palíndromo"
      }
      else{
        return "não é um palíndromo"
      }
  }

  calcularOperacao(operacao: 'soma' | 'subtracao' | 'multiplicacao' | 'divisao'): number {
    const stringValor1 = this.valor1?.toString() || '';
    const stringValor2 = this.valor2?.toString() || '';
  
    const digitos1 = stringValor1.split('').map(Number).filter(n => !isNaN(n));
    const digitos2 = stringValor2.split('').map(Number).filter(n => !isNaN(n));
  
    const soma1 = digitos1.reduce((acc, atual) => acc + atual, 0);
    const soma2 = digitos2.reduce((acc, atual) => acc + atual, 0);
  
    switch (operacao) {
      case 'soma':
        return soma1 + soma2;
      case 'subtracao':
        return soma1 - soma2;
      case 'multiplicacao':
        return soma1 * soma2;
      case 'divisao':
        return soma2 !== 0 ? soma1 / soma2 : NaN;
      default:
        return NaN;
    }
  }  
}