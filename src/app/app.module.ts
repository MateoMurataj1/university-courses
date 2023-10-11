import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AngularFireModule } from '@angular/fire';
import { AngularFireAuth, AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireDatabaseModule } from '@angular/fire/database'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './navbar/navbar.component';
import { CreateComponent } from './create/create.component';
import { ChooseComponent } from './choose/choose.component';
import { MyCoursesComponent } from './my-courses/my-courses.component';
import { AddComponent } from './create/add/add.component';
import { FormsModule } from '@angular/forms';

import { environment } from 'src/environments/environment';
import { CoursesService } from './courses.service';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import {MatTooltipModule} from '@angular/material/tooltip';
import { AuthGuardService } from './auth-guard.service';
import { StudentAuthGuardService } from './student-auth-guard.service';
import { LecturerAuthGuardService } from './lecturer-auth-guard.service';
import { AdminAuthGuardService } from './admin-auth-guard.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CreateComponent,
    ChooseComponent,
    MyCoursesComponent,
    AddComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    NgbModule,
    RouterModule.forRoot([
      { path:'create', component: CreateComponent, canActivate: [AuthGuardService, LecturerAuthGuardService] },
      { path:'choose', component: ChooseComponent, canActivate: [AuthGuardService, StudentAuthGuardService] },
      { path:'my-courses', component: MyCoursesComponent, canActivate: [AuthGuardService, StudentAuthGuardService] },
      { path:'add', component: AddComponent, canActivate: [AuthGuardService, LecturerAuthGuardService] },
      { path:'add/new', component: AddComponent, canActivate: [AuthGuardService, LecturerAuthGuardService] },
      { path:'add/:id', component: AddComponent, canActivate: [AuthGuardService, LecturerAuthGuardService] },
      { path:'login', component: LoginComponent }
    ]),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatTooltipModule
  ],
  providers: [
    CoursesService,

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
