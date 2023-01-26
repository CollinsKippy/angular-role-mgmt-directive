import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MatCardModule } from '@angular/material/card';
import { RoleService } from './role.service';

@NgModule({
  imports: [BrowserModule, FormsModule, MatCardModule, NavbarComponent],
  declarations: [AppComponent, HelloComponent],
  bootstrap: [AppComponent],
  providers: [RoleService],
})
export class AppModule {}
