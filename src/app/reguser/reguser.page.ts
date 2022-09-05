import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { menuController } from '@ionic/core';
@Component({
  selector: 'app-reguser',
  templateUrl: './reguser.page.html',
  styleUrls: ['./reguser.page.scss'],
})
export class ReguserPage implements OnInit {

  constructor(private menuController: MenuController) { }

  ngOnInit() {
  }

  mostrarMenu(){
    this.menuController.open('first')
  }

  usuario={
    nombre:'',
    password:'',
    email:'',
  }
  
  onSubmit(){
  console.log('submit');
  console.log(this.usuario);
  }

  


}
