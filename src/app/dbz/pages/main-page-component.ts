import { Component } from '@angular/core';
import { Character } from '../interfaces/character.interface';

@Component({
    selector: 'app-dbz-main-page', // indica que es un componente personalizado
    templateUrl: './main-page-component.html'
})

export class MainPageComponent {
    public characters: Character[] = [
        {
            name: 'Krillin',
            power: 1000
        },
        {
            name: 'Goku',
            power: 9500
        },
        {
            name: 'Vegeta',
            power: 7500
        }
    ];

    onNewCharacter( character: Character):void {
        this.characters.push(character);
    }

    onDeleteCharacter(id:number){
        this.characters.splice(id) //emision, recibirlo, suscribirse y realizar algo con la emision del evento
    }
}