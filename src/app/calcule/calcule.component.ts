import { Component } from '@angular/core';
import { CalculeService } from '../services/calcule.service';

@Component({
  selector: 'app-calcule',
  templateUrl: './calcule.component.html',
  styleUrls: ['./calcule.component.css']
})
export class CalculeComponent {
  x=1;
  y=1;

  // injecter le service
  constructor( private calculeService:CalculeService) { }
  bilan()
  {
    let somme=this.calculeService.add(this.x,this.y);
    let soustraction=this.calculeService.sub(this.x,this.y);
    let multiplication=this.calculeService.mul(this.x,this.y);
    let division=this.calculeService.div(this.x,this.y);
    alert("la somme est "+somme+" la soustraction est "+soustraction+" la multiplication est "+multiplication+" la division est "+division);
  }


}
