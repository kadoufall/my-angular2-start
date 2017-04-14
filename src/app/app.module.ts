import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

import {AppComponent}  from './app.component';
import {UserFormComponent} from './user-form.component';
import {UserListComponent} from './user.list.component';
import {UserService} from './user-service';
import {UserChangeService} from './user-change-service';
import {DashboardComponent} from './dashboard.component';
import {UserDetailComponent} from './user-detail-component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path: 'users',
        component: UserListComponent,
      },
      {
        path: 'dashboard',
        component: DashboardComponent,
      },
      {
        path: 'userForm',
        component: UserFormComponent,
      },
      {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
      },
      {
        path: 'detail/:id',
        component: UserDetailComponent
      },
    ]),
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
  ],
  declarations: [AppComponent, UserFormComponent, UserListComponent, DashboardComponent, UserDetailComponent],
  providers: [UserService, UserChangeService],
  bootstrap: [AppComponent],
})
export class AppModule {
}
