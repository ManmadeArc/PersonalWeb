import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ContainerComponent } from './components/container/container.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

const routes: Routes = [
  {
    path:"",
    component:MainPageComponent
    
    
  },
  {
    path:"assigment/:id",
    component:ContainerComponent
  },{
    path:"404", 
    component:NotFoundComponent
  },
  {path:"**",
  redirectTo:"/404"
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
