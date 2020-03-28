import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PartageListePageRoutingModule } from './partage-liste-routing.module';

import { PartageListePage } from './partage-liste.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PartageListePageRoutingModule
  ],
  declarations: [PartageListePage]
})
export class PartageListePageModule {}
