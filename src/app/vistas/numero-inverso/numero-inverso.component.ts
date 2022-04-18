import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../servicios/api/api.service';
import { NumeroInversoResponseI } from '../../modelos/numero_respose_interface';
import { devOnlyGuardedExpression, identifierName } from '@angular/compiler';
import {FormGroup,FormControl,Validators} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-numero-inverso',
  templateUrl: './numero-inverso.component.html',
  styleUrls: ['./numero-inverso.component.scss']
})
export class NumeroInversoComponent implements OnInit {

  datoNumero: NumeroInversoResponseI | undefined;

  editarForm = new FormGroup({
    numeroNormal: new FormControl(''),
    numeroInvertido: new FormControl(''),
  });

  get numeroNormal(): any {
    return this.editarForm.get('numeroNormal');
  }

  constructor(private api:ApiService, private router:Router) { }

  ngOnInit(): void {

  }

  onNumeroInverso(){
    if (this.numeroNormal.value > 0){
      this.api.numeroInverso(this.numeroNormal.value).subscribe(data =>{

        this.datoNumero = data;
        this.editarForm.setValue({
          'numeroNormal': this.numeroNormal.value,
          'numeroInvertido': data,
        });
      } )  
    }
    else{
      this.editarForm.setValue({
        'numeroNormal': this.numeroNormal.value,
        'numeroInvertido': '',
      });  
      alert("Debe ingresar un número positivo")
    }
  }
  onRegresar(){
    this.router.navigate(['principal']);
  }

}
