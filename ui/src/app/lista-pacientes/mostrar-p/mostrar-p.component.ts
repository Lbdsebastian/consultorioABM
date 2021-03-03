import { ServicioCompartidoService } from './../../servicio-compartido.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mostrar-p',
  templateUrl: './mostrar-p.component.html',
  styleUrls: ['./mostrar-p.component.css']
})
export class MostrarPComponent implements OnInit {

  constructor(private servicio: ServicioCompartidoService) { }

  listaP: any = [];
  activarEditar: boolean = false;
  activarEliminar: boolean = false;
  pac: any;
  pacId: any;
  tituloModal: any;

  ngOnInit(): void {
    this.mostrarPacientes();
  }

  
  async mostrarPacientes(){
    this.servicio.obtenerPacientes().subscribe(datos => {
      this.listaP = datos;
    });
  }


  editClick(val: any){
    this.activarEditar = true;
    this.pac=val;
    this.tituloModal = "Editar Paciente";
  }

  elimClick(val: any){
    this.activarEliminar = true;
    this.pacId = val;
    this.tituloModal = "Eliminar Paciente";
  }


  cancelarClick(){
    location.reload();
  }
}
