import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent {

  heroes: string[] = ['Spider Man', 'Hulk', 'Iron Man', 'Bat Man']
  heroeBorrado?: string = ''

  borrarHeroe() {
    this.heroeBorrado = this.heroes.shift()
    
  }

}
