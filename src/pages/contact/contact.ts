import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MasinfoPage } from '../masinfo/masinfo';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { Tio } from '../../app/models/tio';
@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
  login: Observable<Tio[]>;
  tio: Tio;
  nombre = '';
  email = '';
  password = '';
  registerForm: FormGroup;
	milista = [];
  constructor(
    //private tioService: TioService, 
    private fb: FormBuilder, 
    public navCtrl: NavController) {
    this.registerForm = this.fb.group({ 
        id:0,
        nombre: ['', Validators.required], 
        email: ['', Validators.maxLength(32)],
        password: ['', Validators.required]
    }); 
    this.milista = [
      {
        'title': 'Angular',
        'icon': 'angular',
        'description': 'A powerful Javascript framework for building single page apps. Angular is open source, and maintained by Google.',
        'color': '#E63135'
      },
      {
        'title': 'CSS3',
        'icon': 'css3',
        'description': 'The latest version of cascading stylesheets - the styling language of the web!',
        'color': '#0CA9EA'
      },
      {
        'title': 'HTML5',
        'icon': 'html5',
        'description': 'The latest version of the web\'s markup language.',
        'color': '#F46529'
      },
      {
        'title': 'JavaScript',
        'icon': 'javascript',
        'description': 'One of the most popular programming languages on the Web!',
        'color': '#FFD439'
      },
      {
        'title': 'Sass',
        'icon': 'sass',
        'description': 'Syntactically Awesome Stylesheets - a mature, stable, and powerful professional grade CSS extension.',
        'color': '#CE6296'
      },
      {
        'title': 'NodeJS',
        'icon': 'nodejs',
        'description': 'An open-source, cross-platform runtime environment for developing server-side Web applications.',
        'color': '#78BD43'
      },
      {
        'title': 'Python',
        'icon': 'python',
        'description': 'A clear and powerful object-oriented programming language!',
        'color': '#3575AC'
      },
      {
        'title': 'Markdown',
        'icon': 'markdown',
        'description': 'A super simple way to add formatting like headers, bold, bulleted lists, and so on to plain text.',
        'color': '#412159'
      },
      {
        'title': 'Tux',
        'icon': 'tux',
        'description': 'The official mascot of the Linux kernel!',
        'color': '#000'
      },
    ]
  }


  openNavDetailsPage(item) {
    //this.navCtrl.push(NavigationDetailsPage, { item: item });
    this.navCtrl.push(MasinfoPage, { item: item });
  }
  
  async onCreate() {
    if(!this.registerForm.valid){
      alert('debe llenar el formulario')
      console.log('debe llenar el formulario')
      return;
    }
    this.tio = new Tio(this.nombre, this.email, this.password);
    /*
    var response = await this.tioService.registrar(this.tio);
    if(response.status==200){
      const data = response.data;
      const usuario = data[0];
      this.store.dispatch(new TaskActions.RegistroUsuario({
        id: usuario.id,
        nombre: usuario.nombre,
        email: usuario.email,
        password: usuario.password
      }) )
      this.router.navigate(['/']);
      
    }else{
      console.log('ocurrio un error')
    }
    */
  }

}
