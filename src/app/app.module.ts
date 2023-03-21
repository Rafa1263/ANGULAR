import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './pages/login/app.component';
import { HeaderComponent } from './components/header/header.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { CommentPrevviewComponent } from './components/comment-prevview/comment-prevview.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { RouterModule } from '@angular/router';
import { ShowViewComponent } from './pages/show-view/show-view.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginFormComponent,
    CommentPrevviewComponent,
    NotFoundComponent,
    ShowViewComponent,


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
        path: '', redirectTo: "/show",
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
