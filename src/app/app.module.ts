import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LoginButtonComponent } from './header/login-button/login-button.component';
import { BarFooComponent } from './header/login-button/bar-foo/bar-foo.component';
import { MyDirective } from './header/my.directive';
import { MyPipe } from './header/my.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginButtonComponent,
    BarFooComponent,
    MyDirective,
    MyPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
