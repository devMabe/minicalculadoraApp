import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Mini Calculadora';
  
  //para hacer un biding bidireccional
  numberOne:number=0;
  numberTwo:number=0;
  result:number=0;


  Sumar():void{
    this.result=this.numberOne+this.numberTwo;
  }

  Restar():void{
    this.result=this.numberOne-this.numberTwo;
  }

}
