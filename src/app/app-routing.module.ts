import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {Routes,RouterModule,PreloadAllModules} from '@angular/router';
import { AppComponent } from './app.component';
import { HeaderComponent } from './core/header/header.component';




import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { DropdownDirective } from './shared/dropdown.directive';
import { ShopppingListService } from './shopping-list/shopping-list.service';
import { HomeComponent } from './core/home/home.component';


import {AuthGuard} from './auth/auth-guard.service';


const appRoutes:Routes=[
  // {path:'',redirectTo:'/recipes',pathMatch:'full'},
   {path:'',component:HomeComponent},
   {path:'recipes',loadChildren:'./recipes/recipes.module#RecipesModule'},

 
  
  {path:'shopping-list',component:ShoppingListComponent  },
  // {path:'shopping-list',loadChildren:'./shopping-list/shopping-list.module#ShoppingListModule'  },
  
 
]

@NgModule({
  imports: [
    // RouterModule.forRoot(appRoutes, {useHash: true})
    RouterModule.forRoot(appRoutes,{preloadingStrategy:PreloadAllModules})
  ],
  exports: [RouterModule]
})

export class AppRoutingModule {

}