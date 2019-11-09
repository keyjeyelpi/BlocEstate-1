import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { EditProfilePageModule } from './pages/profile/edit-profile/edit-profile.module';
import { EditFilterPageModule } from './pages/home/edit-filter/edit-filter.module';

import { PropertyDetailsPageModule } from './pages/property-details/property-details.module';
import { RecentLikesPageModule } from './pages/saved/for-sale/recent-likes/recent-likes.module';
import { FavoritesPageModule } from './pages/saved/for-sale/favorites/favorites.module';

import { Globals } from './classes/globals';
import { Ng2FittextModule } from 'ng2-fittext';
import { SignupPageModule } from './pages/signup/signup.module';
import { SigninPageModule } from './pages/signin/signin.module';

import { ViewContractPageModule } from './pages/contract/view-contract/view-contract.module';
import { StepOnePageModule } from './pages/contract/step-one/step-one.module';
import { StepTwoPageModule } from './pages/contract/step-two/step-two.module';
import { StepThreePageModule } from './pages/contract/step-three/step-three.module';
import { StepFourPageModule } from './pages/contract/step-four/step-four.module';
import { StepFivePageModule } from './pages/contract/step-five/step-five.module';
import { StepSixPageModule } from './pages/contract/step-six/step-six.module';
import { PopoverComponent } from './pages/contract/popover/popover.component';
import { ComingSoonComponent } from './pages/coming-soon/coming-soon.component';

import { HttpClientModule } from '@angular/common/http';

import { Camera } from '@ionic-native/camera/ngx';
import { File } from '@ionic-native/file/ngx';

@NgModule({
  declarations: [AppComponent, PopoverComponent, ComingSoonComponent],
  entryComponents: [PopoverComponent, ComingSoonComponent],
  imports: [
    BrowserModule,
    Ng2FittextModule,
    IonicModule.forRoot(),
    HttpClientModule,
    AppRoutingModule,
    EditProfilePageModule,
    EditFilterPageModule,
    PropertyDetailsPageModule,
    RecentLikesPageModule,
    FavoritesPageModule,
    ViewContractPageModule,
    StepOnePageModule,
    StepTwoPageModule,
    StepThreePageModule,
    StepFourPageModule,
    StepFivePageModule,
    StepSixPageModule,
    SignupPageModule,
    SigninPageModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    Globals,
    Camera,
    File
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
