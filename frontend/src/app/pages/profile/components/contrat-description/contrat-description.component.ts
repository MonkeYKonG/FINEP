import { Component, OnInit, Input } from '@angular/core';
import { Contract } from '../../../../models/contract';
import { InvestmentService } from '../../../../services/investment.service';

@Component({
  selector: 'app-contrat-description',
  templateUrl: './contrat-description.component.html',
  styleUrls: ['./contrat-description.component.css']
})
export class ContratDescriptionComponent implements OnInit {

  @Input() contract: Contract;

  constructor(private investSrv: InvestmentService) { }

  ngOnInit() {
    if (!this.contract) {
      this.contract = new Contract();
    }
  }

  button_click() {
    this.investSrv.test_invest();
  }

}
