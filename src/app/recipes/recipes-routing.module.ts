
import {Routes,RouterModule} from '@angular/router';
import { NgModule } from '@angular/core';

import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { RecipeItemComponent } from './recipe-list/recipe-item/recipe-item.component';
import { RecipesComponent } from './recipes.component';
import {RecipeStartComponent} from './recipe-start/recipe-start.component';
import {RecipeEditComponent} from './recipe-edit/recipe-edit.component';
import {AuthGuard} from '../auth/auth-guard.service';

const recipesRoutes: Routes=[
 {path:'',component:RecipesComponent,children:[
    {path:'',component:RecipeStartComponent}, 
    {path:'new',component:RecipeEditComponent,canActivate:[AuthGuard]}, 
    {path:':id',component:RecipeDetailComponent}, 
    
    {path:':id/edit',component:RecipeEditComponent,canActivate:[AuthGuard]} 
  ]
  },
]

@NgModule({
  imports: [
  RouterModule.forChild(recipesRoutes)
  ],
   exports: [RouterModule]


})
export class RecipesRoutingModule {

}