import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  
})
export class ListadoComponent {

  heroes: string[] = ['Chapulin','Quico','Florinda', 'Chavo','Chilindrina'];
  heroeBorrado: string = '';

  borrarHeroe() {

    const heroeBorrado = this.heroes.shift();
  this.heroeBorrado = heroeBorrado || ''  ;
    console.log(heroeBorrado);
    
  }



}

