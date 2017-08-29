import { AuthGuard } from './guard/auth.guard';
import { MainComponentComponent } from './main-component/main-component/main-component.component';
import { ComponenteModuloComponent } from './otro-module/componente-modulo/componente-modulo.component';
import { NgModule } from '@angular/core';
//Directivas
import { RouterModule, Routes } from "@angular/router";


const routes: Routes = [
  { path: 'main', component: MainComponentComponent },
  { path: '', redirectTo: '/main', pathMatch: 'full'},
  { path: 'component', component: ComponenteModuloComponent, canActivate: [AuthGuard] },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}