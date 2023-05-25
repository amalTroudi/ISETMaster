import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GererComponent } from './admin/gerer/gerer.component';
import { MatTreeModule } from '@angular/material/tree';
import { MatCommonModule } from '@angular/material/core';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { ContactComponent } from './acceuil/contact/contact.component';
import { CoursesComponent } from './acceuil/courses/courses.component';
import { TeamComponent } from './acceuil/team/team.component';
import { TestimonialComponent } from './acceuil/testimonial/testimonial.component';
import { AboutComponent } from './acceuil/about/about.component';
import { ThpComponent } from './acceuil/thp/thp.component';
import { StudentComponent } from './student/student.component';
import { AddMasterComponent } from './admin/addMaster/addMaster.component';
import { RequestComponent } from './admin/request/request.component';
import { DashboardAdminComponent } from './admin/dashboard-admin/dashboard-admin.component';


@NgModule({
  declarations: [
   AppComponent,
     LoginComponent,
     DashboardAdminComponent,
    GererComponent,
    AcceuilComponent,
    ThpComponent,
    AboutComponent,
   ContactComponent,
    CoursesComponent,
    TeamComponent,
    TestimonialComponent,
    StudentComponent,
    AddMasterComponent, 
    RequestComponent

   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule, 
    ReactiveFormsModule,
    // MatIconModule,
    // MatToolbarRowModule,
    // MatToolbarModule,
    MatCommonModule,
    MatTreeModule,
    
  


  ],
  providers: [],  
  bootstrap: [AppComponent]
})
export class AppModule { }
