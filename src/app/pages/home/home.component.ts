import { Component, inject, Input } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  api = inject( ApiService );

  @Input() 
  set type(type:string){
    //1 - Analizar el valor,
    //2 - Llamar al servicio
    let resquest:Observable<any>;
    switch(type){
      case 'category':
            resquest = this.api.getCategories();
            break;
      default:
            resquest = this.api.getNationalities();
    }

    resquest.subscribe( (data:any) => console.log(data) );


  }

  ngOnInit(){


  }

}
