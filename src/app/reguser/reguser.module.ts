import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReguserPageRoutingModule } from './reguser-routing.module';

import { ReguserPage } from './reguser.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReguserPageRoutingModule
  ],
  declarations: [ReguserPage]
})
export class ReguserPageModule {}
