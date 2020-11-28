
import { Component, OnInit } from '@angular/core';

//import { LatLng, LatLngLiteral } from '../services/google-maps-types';
import { LatLngLiteral } from '@agm/core';


import { IonicPage, NavController, NavParams } from 'ionic-angular';



@IonicPage()
@Component({
  selector: 'page-geocerca-google',
  templateUrl: 'geocerca-google.html',
})
/* export class GeocercaGooglePage implements OnInit  {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GeocercaGooglePage');
  }

} */
export class GeocercaGooglePage implements OnInit {
  title = 'Ejemplo simpre de usar Google maps en angular';
  lat = 51.678418;
  lng = 7.809007;
  clickeable = true;
  draggable = true;
  map = null;
  tituloMarker = 'Titulo marker';
  markers = []
  color = "black";
  visible = true;
  paths: LatLngLiteral[] = []
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GeocercaGooglePage');
  }
  
  ngOnInit(): void {
  }
  limpiar(): void{
    this.markers = [];
    this.paths = [];
  }
  //google.maps.MouseEvent
  mapClick(event) {
    //console.log(JSON.stringify(event.coords));
    let position = {
      lat: event.coords.lat,
      lng: event.coords.lng
    }
    this.markers.push(position);

    //this.paths = Object.values(this.markers);
    //this.paths = new Array<any>(this.markers);
    /* this.paths.push({
      lat: event.coords.lat,
      lng: event.coords.lng
    }); */
    console.log(this.paths);
    
  }
  
}