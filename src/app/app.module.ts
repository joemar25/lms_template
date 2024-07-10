// src/app/app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule, provideAnimations } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faHome, faTasks, faInfoCircle, faQuestionCircle, faEnvelope, faCogs, faSignOutAlt, faChalkboardTeacher, faSchool, faBook } from '@fortawesome/free-solid-svg-icons';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';

import { SharedModule } from './shared/module/shared.module';
import { OurHeaderComponent } from './dashboard/sidebar/header/header.component';
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    OurHeaderComponent,
    RouterModule,
    FontAwesomeModule,
    

  ],
  providers: [
    provideAnimations(),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor() {
    library.add(faHome, faTasks, faInfoCircle, faQuestionCircle, faEnvelope, faCogs, faSignOutAlt, faChalkboardTeacher, faSchool, faBook);
  }
}
