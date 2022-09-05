import { Component } from '@angular/core';

interface Componente{
  icon:string;
  name:string;
  redirecTo:string;
}

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor() {}


  componentes: Componente[] = [ 
    {
      icon: 'storefront-outline',
      name: 'Inicio',
      redirecTo: '/inicio',
    },
    {
      icon: 'person-add-outline',
      name: 'Registro',
      redirecTo: '/reguser',
    },
    {
      icon: 'bicycle-outline',
      name: 'Action-sheet',
      redirecTo:'/action-sheet',
    },
    {
      icon: 'albums-outline',
      name: 'Card',
      redirecTo:'/card',
    },
    {
      icon: 'walk-outline',
      name: 'Inputs',
      redirecTo:'/inputs',
    },
    {
      icon: 'book-outline',
      name: 'Contexto',
      redirecTo:'/contexto',
    },
    {
      icon: 'man-outline',
      name: 'Regitro',
      redirecTo:'/registro',
    },
  ];




}
