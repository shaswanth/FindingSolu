import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PaymentComponent } from './payment/payment.component';
import { PlacementsComponent } from './placements/placements.component';
import { ProjectComponent } from './project/project.component';
import { ServiceComponent } from './service/service.component';

const routes: Routes =[

    { path: '', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'service', component: ServiceComponent },
    { path: 'Contact-us', component: ContactUsComponent },
    { path: 'project', component: ProjectComponent },
    { path: 'placement', component: PlacementsComponent },
    { path: 'payment', component: PaymentComponent },
    { path: 'item/:id', component: HomeComponent },
    { path: '',   redirectTo: '/about', pathMatch: 'full' },
    { path: '**', component: PageNotFoundComponent },  
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }

