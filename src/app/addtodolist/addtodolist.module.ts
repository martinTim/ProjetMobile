import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddtodolistPageRoutingModule } from './addtodolist-routing.module';

import { AddtodolistPage } from './addtodolist.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddtodolistPageRoutingModule
  ],
  declarations: [AddtodolistPage]
})
export class AddtodolistPageModule {}
