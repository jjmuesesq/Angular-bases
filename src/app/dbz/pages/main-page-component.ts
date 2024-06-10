import { Component } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { DbzService } from '../services/dbz.service';

@Component({
    selector: 'app-dbz-main-page', // indica que es un componente personalizado
    templateUrl: './main-page-component.html'
})

export class MainPageComponent {
    constructor ( public dbzService: DbzService){ 
        //inyección de dependencias, me habilta en mi componente page toda la informacion utilizada en el servicio
    }
}