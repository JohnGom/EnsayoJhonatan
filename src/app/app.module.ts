import { AuthGuard } from './guard/auth.guard';
import { AppRoutingModule } from './app.routing.module';
import { ModuloModule } from './otro-module/modulo/modulo.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ComponenteModuloComponent } from './otro-module/componente-modulo/componente-modulo.component';
import { MainComponentComponent } from './main-component/main-component/main-component.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponentComponent,
    ComponenteModuloComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
