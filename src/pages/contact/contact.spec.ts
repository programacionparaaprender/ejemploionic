import { TestBed } from '@angular/core/testing';
import { HttpClientModule, HttpClient } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Injector, NgModule } from "@angular/core";
import { ContactPage } from '../../pages/contact/contact';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from '../../app/app.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';


describe('GeocercaGooglePage', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        ContactPage,
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
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  });
  it('Debe retornar usuario valido', () => {
    const comp = TestBed.createComponent(ContactPage);
    const nombre = comp.componentInstance.registerForm.controls['nombre'];
    const email = comp.componentInstance.registerForm.controls['email'];
    const password = comp.componentInstance.registerForm.controls['password'];
    nombre.setValue('ejemplo123');
    email.setValue('ejemplo123@prueba.com.pe');
    password.setValue('123456');
    expect(comp.componentInstance.registerForm.valid).toEqual(true);
    });
});
