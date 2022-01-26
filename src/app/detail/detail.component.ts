import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Register } from '../module/register';
import { RegistrationserviceService } from '../service/registrationservice.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  
  constructor(private detailSer: RegistrationserviceService) { }
  ngOnInit(): void {
  }
  registrationDetails:Register[]=[];

  display()
  {
    for(let i=0;i<this.detailSer.finalHomeDetails.length;i++)
    {
      this.registrationDetails.push(this.detailSer.finalHomeDetails[i]);
    }
  }



}
