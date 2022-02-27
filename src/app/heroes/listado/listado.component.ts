import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent{

  heroes: string[] = ['Spiderman', 'IronMan','Hulk', 'Thor', 'Capitán América'];
  heroeBorrado: string = '';

  // borrar(i: number) {
  //   this.heroes.map((heroe,index) => {
  //     if(index === i) this.heroes.splice(index,1);
  //   });
  // }

  borrar(){
    // if(this.heroes.length === 0){
      // this.heroeBorrado = '';
      // return;
    // }
    this.heroeBorrado = this.heroes.shift() || '';
    console.log('Héroe borrado: ',this.heroeBorrado);
  }

}
