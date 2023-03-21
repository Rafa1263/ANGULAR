import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './pages/outlet/app.component';
import { HeaderComponent } from './components/header/header.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { CommentPrevviewComponent } from './components/comment-prevview/comment-prevview.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { RouterModule } from '@angular/router';
import { ShowViewComponent } from './pages/show-view/show-view.component';
import { LoginViewComponent } from './pages/login-view/login-view.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginFormComponent,
    CommentPrevviewComponent,
    NotFoundComponent,
    ShowViewComponent,
    LoginViewComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      {
        path: 'show',
        component: ShowViewComponent
      },
      {
        path: 'login',
        component: LoginViewComponent
      },
      {
        path: '', redirectTo: "/login",
        pathMatch: 'full'
      },
      {
        path: '**',
        component: NotFoundComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  title = "Twitter"
}
