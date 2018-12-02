import { Component } from "@angular/core";


@Component({
    selector: 'diretivas',
    templateUrl: 'diretivas.component.html'
})
export class DiretivasComponent {
    nomes : string[] = ["Ana", "Juca", "Paulo"];

    mostrar: boolean = true;

}