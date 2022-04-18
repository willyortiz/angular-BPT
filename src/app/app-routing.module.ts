import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HorarioLlegadaComponent } from './vistas/horario-llegada/horario-llegada.component';
import { NumeroInversoComponent } from './vistas/numero-inverso/numero-inverso.component';
import { PrincipalComponent } from './vistas/principal/principal.component';

const routes: Routes = [
  { path:'', redirectTo:'principal', pathMatch:'full' },
  { path:'horario', component:HorarioLlegadaComponent },
  { path:'numero', component:NumeroInversoComponent },
  { path:'principal', component:PrincipalComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [HorarioLlegadaComponent,NumeroInversoComponent,PrincipalComponent];
