import { FormGroup } from '@angular/forms';
import { ServicioCompartidoService } from './../../servicio-compartido.service';
import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-editar-d',
  templateUrl: './editar-d.component.html',
  styleUrls: ['./editar-d.component.css']
})
export class EditarDComponent implements OnInit {

  @Input() dep: any;
  idDep: any;
  editForm! : FormGroup;

  constructor(private servicio: ServicioCompartidoService) { }

  ngOnInit(): void {
    this.editForm = new FormGroup({
      'IdDepartamento': new FormControl(this.dep.IdDepartamento),
      'NombreDepartamento': new FormControl(this.dep.NombreDepartamento),
    });
  }

  async editar(id: any, valor: any){
    const idDep = this.dep.IdDepartamento;
    id = idDep;
    this.servicio.modificarDepartamentos(id,valor).subscribe((response) => 
    console.log(response),
    (error)=> console.log(error));
    window.location.reload();
   }
}
