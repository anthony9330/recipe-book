import {NgModule} from '@angular/core';

import {HeaderComponent} from './header/header.component';
import {HomeComponent} from './home/home.component';
import {SharedNodule} from '../shared/shared.module';
import {AppRoutingModule} from '../app-routing.module';



import { ShopppingListService } from '../shopping-list/shopping-list.service';



import {RecipeService} from "../recipes/recipe.service";
import { HttpModule } from '@angular/http';
import {DataStorageService } from '../shared/data-storage.service';

import { AuthService } from '../auth/auth.service';
import {AuthGuard} from '../auth/auth-guard.service';





@NgModule({
  declarations:[
    HomeComponent,
    HeaderComponent
  ],
  imports:[
    SharedNodule,
    AppRoutingModule
  ],
  exports: [
    AppRoutingModule,
    HeaderComponent
  ],
   providers: [ShopppingListService,RecipeService,DataStorageService,AuthService,AuthGuard],
})
export class CoreModule {

}