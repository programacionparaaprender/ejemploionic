import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { YoutubePage } from '../pages/youtube/youtube';
import { MasinfoPage } from '../pages/masinfo/masinfo';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Proveedor1Provider } from '../providers/proveedor1/proveedor1';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
//import { AgmCoreModule } from '@agm/core';
//import { GeocercaGooglePage } from '../pages/geocerca-google/geocerca-google';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    YoutubePage,
    MasinfoPage,
    TabsPage,
    //GeocercaGooglePage
  ],
  imports: [
    FormsModule, 
    ReactiveFormsModule,
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule,
    /* AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDZktO_JnnvrY4BnD2IyZo8PqNXiDTWP1w',
      libraries: ['places'] 
    }),  */
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    YoutubePage,
    MasinfoPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Proveedor1Provider
  ]
})
export class AppModule {}
