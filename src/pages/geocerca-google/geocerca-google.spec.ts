import { TestBed } from '@angular/core/testing';
import { HttpClientModule, HttpClient } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Injector, NgModule } from "@angular/core";
import { GeocercaGooglePage } from '../../pages/geocerca-google/geocerca-google';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from '../../app/app.component';

describe('GeocercaGooglePage', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        GeocercaGooglePage,
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
    }).compileComponents();
  });
  it('Debe retornar usuario valido', () => {
    /*
    const comp = TestBed.createComponent(RegistrarUsuariosComponent);
    const nombre = comp.componentInstance.registerForm.controls['nombre'];
    const email = comp.componentInstance.registerForm.controls['email'];
    const password = comp.componentInstance.registerForm.controls['password'];
    nombre.setValue('ejemplo123');
    email.setValue('ejemplo123@prueba.com.pe');
    password.setValue('123456');
    expect(comp.componentInstance.registerForm.valid).toBeTrue();
    */
    });


});
