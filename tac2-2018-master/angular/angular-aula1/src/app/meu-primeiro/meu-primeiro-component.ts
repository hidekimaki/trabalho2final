// C I D A R
import { Component } from '@angular/core';

@Component({
    selector: 'meu-primeiro',
    templateUrl: 'meu-primeiro-component.html'    
    /*template: `<h1>
        Este é o meu primeiro componente
        </h1>`*/
})
export class MeuPrimeiroComponent {
    nome: string = "Ricardo Sobjak";
}