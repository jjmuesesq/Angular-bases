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
  public onDelete: EventEmitter<number> = new EventEmitter(); //instancia emisor de evento del component list hacia el padre main page.
  

  onDeleteCharacter( index: number ):void {
    //TODO Emitir el id del personaje
    // console.log({index});
    this.onDelete.emit(index);
  }
}
