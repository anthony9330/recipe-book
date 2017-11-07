import { Component, OnInit,ViewChild,ElementRef,EventEmitter, Output,Input } from '@angular/core';
import { DataStorageService} from '../../shared/data-storage.service';
import { Response} from '@angular/http';
import { AuthService} from '../../auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
@Output() itemSelected= new EventEmitter<string>();
@Output() passValue=new EventEmitter<{name:string,description:string}>();
@Input() name:string;


  constructor(private dtStorage:DataStorageService,
              private authService:AuthService) { }

  ngOnInit() {


  }

  onLogOut(){
    this.authService.logOut();
  }

  onSaveData(){
        this.dtStorage.storeRecipes()
        .subscribe(
          (response:Response)=>{
            console.log(response);
          })
  }

  onFetchData(){
     this.dtStorage.getRecipes();
    
  }



 //  onSelect(item:string){
 //    console.log(item);
 //  this.itemSelected.emit(item);
 //  }

 //  passParent(val:string){
 //    this.passValue.emit({
 //      name:val,
 //      description:'another value'
 //    });
  
 //    console.log(val);
 // }


}
