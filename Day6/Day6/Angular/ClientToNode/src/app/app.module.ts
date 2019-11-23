import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { HttpClientModule } from '@angular/common/http';
import { EditComponent } from './edit/edit.component';
import { ContactComponent } from './contact/contact.component';
import { DeleteComponent } from './delete/delete.component';
import { RegisterComponent } from './register/register.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { RouterModule } from '@angular/router';
import {NgModel, FormsModule, NgForm} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutusComponent,
    EditComponent,
    ContactComponent,
    DeleteComponent,
    RegisterComponent,
    NotfoundComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot([
    { path: "", component: HomeComponent }, 
     { path: "home", component: HomeComponent },
     { path: "register", component: RegisterComponent },
     { path: "about", component: AboutusComponent },
     { path: "contact", component: ContactComponent },
     { path: "edit/:No", component: EditComponent },
     { path: "delete/:No", component: DeleteComponent },
     { path: "**", component: NotfoundComponent }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule 
{
  constructor()
  {
    console.log("App Module Created");
  }
}