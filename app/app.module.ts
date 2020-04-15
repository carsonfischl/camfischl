import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HobbiesComponent } from './hobbies/hobbies.component';
import { WorkComponent } from './work/work.component';
import { EducationComponent } from './education/education.component';
import { IndexComponent } from './index/index.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    HobbiesComponent,
    WorkComponent,
    EducationComponent,
    IndexComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
