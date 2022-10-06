import { Component, OnInit } from '@angular/core';
import { Client } from '../core/Client';

@Component({
  selector: 'app-composant-form',
  templateUrl: './composant-form.component.html',
  styleUrls: ['./composant-form.component.css']
})
export class ComposantFormComponent  {

  client:Client=new Client();
  isValid=false;


  verifyFormData(){
    if(this.client.password != this.client.passwordConfirm){
      alert('Le mot de passe et la confirmation de mot de passe ne sont pas identiques')
      return
    }
    this.isValid = true    
  }

}
