import { Component, Input, EventEmitter, Output } from "@angular/core";

@Component({
    selector: "color",
    template: `
        <h1>Color Component</h1>
        <div>
            <div>Cor preferida: {{ corPreferida }}</div>
            <button (click)="clicou('verde')">Verde</button> <br/>
            <button (click)="clicou('azul')">Azul</button>
        </div>
    `
})
export class ColorComponent {
    @Input('cor')
    corPreferida: string = '';

    @Output('corEscolhida')
    eventEmitter = new EventEmitter();

    public clicou(cor: string) {
        console.log(cor);
        this.eventEmitter.emit(cor);
    }
}