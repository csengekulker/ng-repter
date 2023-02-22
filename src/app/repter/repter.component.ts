import { Component, OnInit } from '@angular/core';
import { ApiService } from '../shared/api.service';

@Component({
  selector: 'app-repter',
  templateUrl: './repter.component.html',
  styleUrls: ['./repter.component.scss']
})
export class RepterComponent implements OnInit {

  flights !: any

  constructor(private api: ApiService) { }



  ngOnInit(): void {

    this.api.getFlights().subscribe({
      next: (data:any) => {
        this.flights = data
        console.log(this.flights);
        
      },
      error: (err:any) => {
        console.log(err);
        
      }
    })
  }

}
