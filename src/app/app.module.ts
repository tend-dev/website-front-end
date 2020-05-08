import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './pages/home/home.component';
import { BlogComponent } from './pages/blog/blog.component';
import { AboutComponent } from './pages/about/about.component';
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
import { GetInTouchComponent } from './components/get-in-touch/get-in-touch.component';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { FormsModule } from '@angular/forms';

import { MatButtonModule } from '@angular/material/button';
import { BlogAreaComponent } from './components/blog-area/blog-area.component';
import { MatTabsModule } from '@angular/material/tabs';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { CustomSnackBarComponent } from './components/custom-snack-bar/custom-snack-bar.component';
import { MobileMenuComponent } from './components/mobile-menu/mobile-menu.component';
import { TermsComponent } from './pages/terms/terms.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BlogComponent,
    AboutComponent,
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
    GetInTouchComponent,
    ContactFormComponent,
    BlogAreaComponent,
    CustomSnackBarComponent,
    MobileMenuComponent,
    TermsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,

    MatButtonModule,
    MatTabsModule,
    MatDialogModule,
    MatInputModule,
    MatIconModule,
    MatSnackBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
