import { Component,Input,EventEmitter,OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'app';
loadedItem='recipe';



  onNavigate(item:string){
      this.loadedItem=item;
  }

  ngOnInit(){
      firebase.initializeApp({
         apiKey: "AIzaSyCxDoqxmEKTxlq4Mmrxjo7t25ZPqbegC7E",
         authDomain: "ng-recipe-74148.firebaseapp.com",
      });
  }


}
