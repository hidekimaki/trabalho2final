import { Component } from '@angular/core';

@Component({
    selector: 'data-binding',
    templateUrl: 'data-binding.component.html',
    styleUrls: ['data-binding.component.css']
})
export class DataBindingComponent {

    nome: string = 'Ricardo Sobjak';

    conteudoAtual: string = '';
    conteudoSalvo: string = '';

    mouseOver:boolean = false;

    public mousePassou() {
        this.mouseOver = ! this.mouseOver;
    }

    public clicou(elemento) {
        alert(this.nome + ' clicou no botão');
        console.log(elemento)
    }

    public onKeyUp(event) {
        console.log(event)
        
        this.conteudoAtual = event.target.value;
    }

    public onSave(valor : string) {
        this.conteudoSalvo = valor;
    }
}