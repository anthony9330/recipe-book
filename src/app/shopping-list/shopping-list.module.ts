import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule  } from '@angular/forms';

import { ShoppingListComponent } from './shopping-list.component';
import { ShoppingEditComponent } from './shopping-edit/shopping-edit.component';

import { DropdownDirective } from '../shared/dropdown.directive';

import { SharedNodule } from '../shared/shared.module';



@NgModule({
  declarations:[
      
    ShoppingListComponent,
    ShoppingEditComponent,
  ],
  imports:[  
     FormsModule,
     CommonModule,
     SharedNodule
  ],
  exports:[
  ]
})

export class  ShoppingListModule {

}