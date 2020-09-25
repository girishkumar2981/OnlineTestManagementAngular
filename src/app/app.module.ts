import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { AddTestComponent } from './add-test/add-test.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { AddquestionComponent } from './addquestion/addquestion.component';
import { AssignTestComponent } from './assign-test/assign-test.component';
import { ListQuestionComponent } from './list-question/list-question.component';
import { ListTestComponent } from './list-test/list-test.component';
import { NewpageComponent } from './newpage/newpage.component';
import { RecoveryComponent } from './recovery/recovery.component';
import { RegisterComponent } from './register/register.component';
import { UpdateQuestionComponent } from './update-question/update-question.component';
import { UpdateTestComponent } from './update-test/update-test.component';
import { UserComponentComponent } from './user-component/user-component.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    LoginComponent,
    LogoutComponent,
    AddTestComponent,
    AdminloginComponent,
    AddquestionComponent,
    AssignTestComponent,
    ListQuestionComponent,
    ListTestComponent,
    NewpageComponent,
    RecoveryComponent,
    RegisterComponent,
    UpdateQuestionComponent,
    UpdateTestComponent,
    UserComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
