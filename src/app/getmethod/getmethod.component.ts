import { Component } from '@angular/core';
import { HttpService } from '../httpservice.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-getmethod',
  templateUrl: './getmethod.component.html',
  styleUrls: ['./getmethod.component.css']
})
export class GetmethodComponent {

constructor(private sev:HttpService){

}

user:any

gettingData(){
  this.sev.getdata().subscribe({
    next:(res)=>{
      console.log(res);
      this.user=res
    }
  })
  
  

  
  
}

}
