import { ServicioCompartidoService } from './../../servicio-compartido.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-agregar-d',
  templateUrl: './agregar-d.component.html',
  styleUrls: ['./agregar-d.component.css']
})
export class AgregarDComponent implements OnInit {

  departamentoForm!: FormGroup;

  constructor(private servicio: ServicioCompartidoService) { }

  ngOnInit(): void {
    this.departamentoForm = new FormGroup({
      'NombreDepartamento': new FormControl(null),
    });
  }

  onSubmit(valor: FormGroup){
    this.servicio.crearDepartamentos(valor).subscribe((response) => 
    console.log(response),
    (error)=> console.log(error));
    window.location.reload();
  }
}
