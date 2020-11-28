import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GeocercaGooglePage } from './geocerca-google';

@NgModule({
  declarations: [
    GeocercaGooglePage,
  ],
  imports: [
    IonicPageModule.forChild(GeocercaGooglePage),
  ],
})
export class GeocercaGooglePageModule {}
