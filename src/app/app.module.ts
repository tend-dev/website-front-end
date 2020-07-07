import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { TopMenuComponent } from './components/top-menu/top-menu.component';
import { TopBannerComponent } from './components/top-banner/top-banner.component';
import { PurposeComponent } from './components/purpose/purpose.component';
import { OurServicesComponent } from './components/our-services/our-services.component';
import { PlansComponent } from './components/plans/plans.component';
import { WhyChooseComponent } from './components/why-choose/why-choose.component';
import { CommonCasesComponent } from './components/common-cases/common-cases.component';
import { FaqComponent } from './components/faq/faq.component';
import { AboutBlockComponent } from './components/about-block/about-block.component';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { GetInTouchModule } from './components/get-in-touch/get-in-touch.module';

import { MatButtonModule } from '@angular/material/button';
import { BlogAreaComponent } from './components/blog-area/blog-area.component';
import { MatTabsModule } from '@angular/material/tabs';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { CustomSnackBarComponent } from './components/custom-snack-bar/custom-snack-bar.component';
import { MobileMenuComponent } from './components/mobile-menu/mobile-menu.component';

// * NgRx Store
import { StoreModule } from '@ngrx/store';
import { AppEntityDataModule } from '@store/entity-metadata/app-entity-data.module';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '@env/environment';
import { EffectsModule } from '@ngrx/effects';

import { CoreModule } from '@core/core.module';
import { QuillModule } from 'ngx-quill'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotFoundComponent,
    TopMenuComponent,
    TopBannerComponent,
    PurposeComponent,
    OurServicesComponent,
    PlansComponent,
    WhyChooseComponent,
    CommonCasesComponent,
    FaqComponent,
    AboutBlockComponent,
    ContactFormComponent,
    BlogAreaComponent,
    CustomSnackBarComponent,
    MobileMenuComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,

    GetInTouchModule,

    MatButtonModule,
    MatTabsModule,
    MatDialogModule,
    MatInputModule,
    MatIconModule,
    MatSnackBarModule,

    StoreModule.forRoot({}, {}),
    EffectsModule.forRoot([]),
    AppEntityDataModule,
    environment.production ? [] : StoreDevtoolsModule.instrument({ maxAge: 25 }),
    CoreModule,
    QuillModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
