    import { NgModule, ErrorHandler } from '@angular/core';
    import { BrowserModule } from '@angular/platform-browser';
    import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
    import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

export const firebaseConfig = {
    
    apiKey: "AIzaSyB8j-winlTep0CYfmJS6GiWX-6kIwQhnzE",
    authDomain: "takabet2018.firebaseapp.com",
    databaseURL: "https://takabet2018.firebaseio.com",
    projectId: "takabet2018",
    storageBucket: "takabet2018.appspot.com",
    messagingSenderId: "833580256701"    
    
};

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage
  ],
  imports: [
  //  AngularFireAuthModule,
    BrowserModule,   
    IonicModule.forRoot(MyApp),      
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
