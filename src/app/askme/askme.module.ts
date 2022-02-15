import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AskmePageRoutingModule } from './askme-routing.module';

import { AskmePage } from './askme.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AskmePageRoutingModule
  ],
  declarations: [AskmePage]
})
export class AskmePageModule {}
