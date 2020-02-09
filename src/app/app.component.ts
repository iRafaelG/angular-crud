import { Component } from '@angular/core';
import { Empleado } from './models/empleado'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  empleadoSeleccionado: Empleado = new Empleado;

  empleadoArray: Empleado[] = [
    {id: 1, nombre: "Foo", pais: "Too"},
    {id: 2, nombre: "Too", pais: "Foo"}
  ];

  agregarEditar(){

    if(this.empleadoSeleccionado.id == 0){

      this.empleadoSeleccionado.id = this.empleadoArray.length + 1;
      this.empleadoArray.push(this.empleadoSeleccionado);
    }

    this.empleadoSeleccionado = new Empleado;
  }

  seleccionarEmpleado(empleado: Empleado){

    this.empleadoSeleccionado = empleado;

  }

  borrar(){

    if(confirm('Quieres eliminarlo')){
      this.empleadoArray = this.empleadoArray.filter(x => x != this.empleadoSeleccionado);

      this.empleadoSeleccionado = new Empleado;
    }

  }

}
