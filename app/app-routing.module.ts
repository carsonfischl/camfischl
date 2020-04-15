import { ContactComponent } from './contact/contact.component';
import { EducationComponent } from './education/education.component';
import { WorkComponent } from './work/work.component';
import { HobbiesComponent } from './hobbies/hobbies.component';
import { IndexComponent } from './index/index.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path: '', component: IndexComponent},
  {path: 'hobbies', component: HobbiesComponent},
  {path: 'work', component: WorkComponent},
  {path: 'education', component: EducationComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'index', component: IndexComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
