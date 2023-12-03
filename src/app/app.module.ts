import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './page/home/home.component';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';



import { LoginComponent } from './page/login/login.component';
import { LabsComponent } from './page/labs/labs.component';
import { RegisterComponent } from './page/register/register.component';
import { HeaderComponent } from './commons/header/header.component';
const config = {
  apiKey: "AIzaSyC1e4AK_VqnORu9rhZmw6m5yr8n6Tvjz6Y",
  authDomain: "apis-5bf15.firebaseapp.com",
  databaseURL: "https://apis-5bf15-default-rtdb.firebaseio.com",
  projectId: "apis-5bf15",
  storageBucket: "apis-5bf15.appspot.com",
  messagingSenderId: "573756268196",
  appId: "1:573756268196:web:91ce0b8c439ef17cdad031"
};

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    LabsComponent,
    RegisterComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    provideFirebaseApp(() => initializeApp(config)),
    provideAuth(() => getAuth()), 
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }