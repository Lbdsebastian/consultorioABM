import { ServicioCompartidoService } from './../../servicio-compartido.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mostrar-d',
  templateUrl: './mostrar-d.component.html',
  styleUrls: ['./mostrar-d.component.css']
})
export class MostrarDComponent implements OnInit {
  tituloModal: string ="";

  constructor(private servicio: ServicioCompartidoService) { }

    listaD: any = []; 
    dep: any;
    depId: any;
    activarEditar: boolean = false;
    activarEliminar: boolean = false;

  ngOnInit(): void {
    this.mostrarDepartamentos();
  }

  async mostrarDepartamentos(){
    this.servicio.obtenerDepartamentos().subscribe(datos => {
      this.listaD = datos;
    })
  }

  editClick(val: any){
    this.activarEditar = true;
    this.dep=val;
    this.tituloModal = "Editar Departamento";
  }
  cancelarClick(){
    this.activarEditar = false;
  }

  elimClick(val: any){
    this.activarEliminar = true;
    this.depId = val;
    this.tituloModal = "Eliminar Departamento";
  }
}
