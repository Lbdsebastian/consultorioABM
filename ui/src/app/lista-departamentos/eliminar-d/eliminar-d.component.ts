import { FormControl, FormGroup } from '@angular/forms';
import { ServicioCompartidoService } from './../../servicio-compartido.service';
import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-eliminar-d',
  templateUrl: './eliminar-d.component.html',
  styleUrls: ['./eliminar-d.component.css']
})

export class EliminarDComponent implements OnInit {

  @Input() elimForm!: FormGroup
  @Input() depId: any;

  constructor(private servicio: ServicioCompartidoService) { }

  ngOnInit(): void {
    this.elimForm = new FormGroup({
      'IdDepartamento': new FormControl(this.depId.IdDepartamento),
      'NombreDepartamento': new FormControl(this.depId.NombreDepartamento),
    });
  }

  async eliminarD(id: number){
    this.servicio.eliminarDepartamentos(id).subscribe((response) => 
    console.log(response),
    (error)=> console.log(error));
    window.location.reload();
   }

}
