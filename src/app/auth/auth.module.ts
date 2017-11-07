
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';

import { FormsModule  } from '@angular/forms';
import { AuthRouting  } from './auth-routing.module';

@NgModule({
  declarations:[
     
    SignupComponent,
    SigninComponent,
  

  ],
  imports:[
      FormsModule,
        CommonModule,
        AuthRouting
      
  ],
  exports:[
  
  
  ]
})

export class AuthModule {

}

