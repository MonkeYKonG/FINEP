import { Component, OnInit } from '@angular/core';

import { ApiService } from '../../services/api.service';
import { Contract } from '../../models/contract';
import { Investment } from '../../models/investment';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.css']
})
export class MyProfileComponent implements OnInit {

  contracts: Array<Contract> = [];
  investments: Array<Investment> = [];
  newContract: Contract = new Contract();
  newInvestment: Investment = new Investment();

  constructor(public apiService: ApiService) { }

  ngOnInit() {
    this.apiService.get('contracts').subscribe((data: Array<Contract>) => {
      this.contracts = data;
      console.log('/contracts :', this.contracts);
    });
    this.apiService.get('investments').subscribe((data: Array<Investment>) => {
      this.investments = data;
      console.log('/investment : ', this.investments);
    });
  }

  submitNewContract() {
    this.apiService.post('contracts/new', this.newContract).subscribe((data: any) => {
      console.log('new contract: ', data);
    });
  }

  submitNewInvestment() {
    this.apiService.post('investments', this.newInvestment).subscribe((data: any) => {
      console.log('new investment', data);
    });
  }

}
