import { Component } from '@angular/core';
import { HttpService } from '../httpservice.service';

@Component({
  selector: 'app-inteceptor',
  templateUrl: './inteceptor.component.html',
  styleUrls: ['./inteceptor.component.css']
})
export class InteceptorComponent {

  data: any[] = [];

  constructor(private dataService: HttpService) {}

  ngOnInit(): void {
    this.dataService.getdata().subscribe((result) => (this.data = result));
  }
}
