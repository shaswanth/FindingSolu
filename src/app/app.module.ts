import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ServiceComponent } from './service/service.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HeaderComponent } from './Allpages/header/header.component';
import { FooterComponent } from './Allpages/footer/footer.component';
import { ProjectComponent } from './project/project.component';
import { PlacementsComponent } from './placements/placements.component';
import { PaymentComponent } from './payment/payment.component';


@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    HomeComponent,
    AboutComponent,
    ServiceComponent,
    ContactUsComponent,
    HeaderComponent,
    FooterComponent,
    ProjectComponent,
    PlacementsComponent,
    PaymentComponent
  ],
  
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
