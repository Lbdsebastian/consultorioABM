import { FormGroup } from '@angular/forms';
import { ServicioCompartidoService } from './../../servicio-compartido.service';
import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-editar-p',
  templateUrl: './editar-p.component.html',
  styleUrls: ['./editar-p.component.css']
})
export class EditarPComponent implements OnInit {

  @Input() pac: any;
  idPac: any;
  editForm! : FormGroup;
  listaD: any = [];

  constructor(private servicio: ServicioCompartidoService) { }

  ngOnInit(): void {
    this.editForm = new FormGroup({
      'IdPaciente': new FormControl(this.pac.IdPaciente),
      'NombrePaciente': new FormControl(this.pac.NombrePaciente),
      'ApellidoPaciente': new FormControl(this.pac.ApellidoPaciente),
      'Departamento': new FormControl(this.pac.Departamento)
    });
    this.mostrarDepartamentos();
  }

  editar(id: any, valor: any){
  const IdPac = this.pac.IdPaciente;
  id = IdPac;
  this.servicio.modificarPaciente(id,valor).subscribe((response) => 
  console.log(response),
  (error)=> console.log(error));
  window.location.reload();
 }
 
 mostrarDepartamentos(){
  this.servicio.obtenerDepartamentos().subscribe(datos => {
    this.listaD = datos;
  })
}
}
