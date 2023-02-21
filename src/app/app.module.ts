import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ArticleComponent } from './components/article/article.component';
import { CartesComponent } from './components/cartes/cartes.component';
import { HistoryComponent } from './components/history/history.component';
import { MenuComponent } from './components/menu/menu.component';
import { ChefComponent } from './components/chef/chef.component';
import { ContactComponent } from './components/contact/contact.component';
import { FeedbackComponent } from './components/feedback/feedback.component';
import { NewsComponent } from './components/news/news.component';
import { FooterComponent } from './components/footer/footer.component';
import { VideoComponent } from './components/video/video.component';
import { CarteComponent } from './components/carte/carte.component';
import { ProduitComponent } from './components/produit/produit.component';
import { UneChefComponent } from './components/une-chef/une-chef.component';
import { NewComponent } from './components/new/new.component';
import { AddPlatComponent } from './components/add-plat/add-plat.component';
import { AddChefComponent } from './components/add-chef/add-chef.component';
import { SignupComponent } from './signup/signup.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ArticleComponent,
    CartesComponent,
    HistoryComponent,
    MenuComponent,
    ChefComponent,
    ContactComponent,
    FeedbackComponent,
    NewsComponent,
    FooterComponent,
    VideoComponent,
    CarteComponent,
    ProduitComponent,
    UneChefComponent,
    NewComponent,
    AddPlatComponent,
    AddChefComponent,
    SignupComponent,
    HomeComponent,
    LoginComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CommonModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
