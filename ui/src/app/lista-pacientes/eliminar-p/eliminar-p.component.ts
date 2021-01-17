import { FormControl, FormGroup } from '@angular/forms';
import { ServicioCompartidoService } from './../../servicio-compartido.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-eliminar-p',
  templateUrl: './eliminar-p.component.html',
  styleUrls: ['./eliminar-p.component.css']
})
export class EliminarPComponent implements OnInit {

  @Input() elimForm!: FormGroup
  @Input() pacId: any;
  

  constructor(private servicio: ServicioCompartidoService) { }

  ngOnInit(): void {
    this.elimForm = new FormGroup({
      'IdPaciente': new FormControl(this.pacId.IdPaciente),
      'NombrePaciente': new FormControl(this.pacId.NombrePaciente),
      'ApellidoPaciente': new FormControl(this.pacId.ApellidoPaciente),
      'Departamento': new FormControl(this.pacId.Departamento)
    });
  }


  eliminarP(id: number){
    this.servicio.eliminarPaciente(id).subscribe((response) => 
    console.log(response),
    (error)=> console.log(error));
    window.location.reload();
   }
}
