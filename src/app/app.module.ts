import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {Routes,RouterModule} from '@angular/router';
import { AppComponent } from './app.component';


import { ShopppingListService } from './shopping-list/shopping-list.service';
import {AppRoutingModule} from './app-routing.module';

import { FormsModule  } from '@angular/forms';
import {RecipeService} from "./recipes/recipe.service";
import { HttpModule } from '@angular/http';
import {DataStorageService } from './shared/data-storage.service';

import { AuthService } from './auth/auth.service';
import {AuthGuard} from './auth/auth-guard.service';

import {SharedNodule} from './shared/shared.module';
import {ShoppingListModule} from './shopping-list/shopping-list.module';
import {AuthModule} from './auth/auth.module';
import {CoreModule} from './core/core.module';





@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    // FormsModule,
    AppRoutingModule,
    HttpModule,

    SharedNodule,
    ShoppingListModule,
    AuthModule,
    CoreModule
  ],
  providers: [ShopppingListService,RecipeService,DataStorageService,AuthService,AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
