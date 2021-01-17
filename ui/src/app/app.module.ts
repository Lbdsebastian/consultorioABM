import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaPacientesComponent } from './lista-pacientes/lista-pacientes.component';
import { ListaDepartamentosComponent } from './lista-departamentos/lista-departamentos.component';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { MostrarPComponent } from './lista-pacientes/mostrar-p/mostrar-p.component';
import { AgregarPComponent } from './lista-pacientes/agregar-p/agregar-p.component';
import { EditarPComponent } from './lista-pacientes/editar-p/editar-p.component';
import { EliminarPComponent } from './lista-pacientes/eliminar-p/eliminar-p.component';
import { MostrarDComponent } from './lista-departamentos/mostrar-d/mostrar-d.component';
import { AgregarDComponent } from './lista-departamentos/agregar-d/agregar-d.component';
import { EditarDComponent } from './lista-departamentos/editar-d/editar-d.component';
import { EliminarDComponent } from './lista-departamentos/eliminar-d/eliminar-d.component';
import { InicioComponent } from './inicio/inicio.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    ListaPacientesComponent,
    ListaDepartamentosComponent,
    CabeceraComponent,
    MostrarPComponent,
    AgregarPComponent,
    EditarPComponent,
    EliminarPComponent,
    MostrarDComponent,
    AgregarDComponent,
    EditarDComponent,
    EliminarDComponent,
    InicioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
