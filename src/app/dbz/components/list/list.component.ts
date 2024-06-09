import { EventEmitter, Component, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  @Input()
  public charactersList: Character[] = [
    {
        name: 'Trunks',
        power: 10
    }
  ];

  // onDelete = Index emitir en list component
  @Output()
  public onDelete: EventEmitter<number> = new EventEmitter(); //instancia emisor de evento.
  

  onDeleteCharacter( index: number ):void {
    //TODO Emitir el id del perrsonaje
    console.log({index});
    this.onDelete.emit(index);
  }
}
