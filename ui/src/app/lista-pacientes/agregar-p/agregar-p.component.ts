import { ServicioCompartidoService } from './../../servicio-compartido.service';
import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-agregar-p',
  templateUrl: './agregar-p.component.html',
  styleUrls: ['./agregar-p.component.css']
})
export class AgregarPComponent implements OnInit {

  listaD: any = [];
  pacienteForm!: FormGroup;

  constructor(private servicio: ServicioCompartidoService) {}



  ngOnInit(): void {
    this.pacienteForm = new FormGroup({
      'NombrePaciente': new FormControl(null),
      'ApellidoPaciente': new FormControl(null),
      'Departamento': new FormControl('Clínica Médica')
    });
    this.mostrarDepartamentos();
  }

  async onSubmit(valor: FormGroup){
    this.servicio.crearPaciente(valor).subscribe((response) => 
    console.log(response),
    (error)=> console.log(error));
    window.location.reload();
  }

  async mostrarDepartamentos(){
    this.servicio.obtenerDepartamentos().subscribe(datos => {
      this.listaD = datos;
    })
  }
}
