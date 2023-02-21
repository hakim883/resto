import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddChefComponent } from './components/add-chef/add-chef.component';
import { AddPlatComponent } from './components/add-plat/add-plat.component';
import { ChefComponent } from './components/chef/chef.component';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { MenuComponent } from './components/menu/menu.component';
import { SignupComponent } from './signup/signup.component';


const routes: Routes = [
  
  {path: "", component: HomeComponent},

  {path: "signup", component: SignupComponent},
  {path:"addchef",component:AddChefComponent},
  {path:"addplat",component:AddPlatComponent},
  {path:"login",component:LoginComponent},
  {path:"chefs",component:ChefComponent},
  {path:"plats",component:MenuComponent},
  {path:"contact",component:ContactComponent}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
