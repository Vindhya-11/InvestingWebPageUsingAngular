import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Mutual } from '../module/mutual';
import { RegistrationserviceService } from '../service/registrationservice.service';

@Component({
  selector: 'app-explore-mutual',
  templateUrl: './explore-mutual.component.html',
  styleUrls: ['./explore-mutual.component.css']
})
export class ExploreMutualComponent implements OnInit {

  constructor(private exploreMutualServe:RegistrationserviceService,private router:Router) { }
  objMutual:Mutual = new Mutual();
  ngOnInit(): void {
    this.objMutual = this.exploreMutualServe.getExploreMutual();
  }

  addMutual(x:Mutual)
  {
    this.exploreMutualServe.setMutual(x);
    this.router.navigate(['/dashboard']);
  }
  close()
  {
    this.router.navigate(['homeinvest']);
  }

}
