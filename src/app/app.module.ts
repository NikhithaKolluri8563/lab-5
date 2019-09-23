import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { LocalNotifications } from '@ionic-native/local-notifications';
import { Geolocation } from "@ionic-native/geolocation";

import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireModule } from 'angularfire2';
import {AngularFireAuth} from 'angularfire2/auth';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {LoginPage} from "../pages/login/login";
import {GeolocationPage} from "../pages/geolocation/geolocation";

const firebaseConfig = {
  apiKey: "AIzaSyAl6UQXhQN6u9WJcyR5Rr0cG69x91GOBtw",
  authDomain: "assignment5-e2ecb.firebaseapp.com",
  databaseURL: "https://assignment5-e2ecb.firebaseio.com",
  projectId: "assignment5-e2ecb",
  storageBucket: "",
  messagingSenderId: "654448086300",
  appId: "1:654448086300:web:77de11044080605defbed9"
};
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    GeolocationPage,
    LoginPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(firebaseConfig),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    GeolocationPage,
    LoginPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    LocalNotifications,
    Geolocation,
    AngularFireAuth
  ]
})
export class AppModule {}
