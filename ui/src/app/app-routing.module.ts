import { InicioComponent } from './inicio/inicio.component';
import { ListaPacientesComponent } from './lista-pacientes/lista-pacientes.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListaDepartamentosComponent } from './lista-departamentos/lista-departamentos.component';

const routes: Routes = [
{path: 'pacientes' , component: ListaPacientesComponent},
{path: 'departamentos', component: ListaDepartamentosComponent},
{path: '', component: InicioComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
